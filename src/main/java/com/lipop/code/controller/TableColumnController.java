package com.lipop.code.controller;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.bean.copier.CopyOptions;
import cn.hutool.core.lang.func.LambdaUtil;
import com.lipop.code.common.ResponseData;
import com.lipop.code.core.cache.ICache;
import com.lipop.code.domain.GenTable;
import com.lipop.code.domain.vo.ColumnVo;
import com.lipop.code.service.GenTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
public class TableColumnController {

    @Autowired
    private GenTableService genTableService;

    @Autowired
    private ICache iCache;

    @RequestMapping("/test")
    public String gen() {
        return "success";
    }


    @GetMapping("/table-info-list")
    public ResponseData tableList() {
        return ResponseData.createSuccessResponse(genTableService.selectTableByName());
    }

    @GetMapping("/table-columns")
    public ResponseData<List<Map<String, Object>>> tableDetail(String tableName) {
        List<ColumnVo> columns = iCache.getColumnVo(tableName);

        List<Map<String, Object>> collect = columns.stream().map(item -> {
            Map<String, Object> extraField = item.getExtraField();
            Map<String, Object> stringObjectMap = BeanUtil.beanToMap(item);

            if (extraField.isEmpty()) {
                stringObjectMap.remove(LambdaUtil.getFieldName(ColumnVo::getExtraField));
            }else {
                stringObjectMap.putAll(extraField);
            }
            return stringObjectMap;

        }).collect(Collectors.toList());

        return ResponseData.createSuccessResponse(collect);
    }


    @PutMapping("/table-columns")
    public ResponseData updateTableColumns(String tableName, @RequestBody List<Map<String, Object>> columns) {

        List<ColumnVo> columnVos = columns.stream().map(item -> {

            ColumnVo columnVo = BeanUtil.toBean(item, ColumnVo.class, CopyOptions.create());

            Map<String, Object> columnMap = BeanUtil.beanToMap(columnVo);


            Map<String, Object> extraField = new HashMap<>();

            Set<String> keys = item.keySet();

            for (String key :
                    keys) {
                if (!columnMap.containsKey(key)) {
                    extraField.put(key, item.get(key));
                }
            }

            columnVo.setExtraField(extraField);

            return columnVo;
        }).collect(Collectors.toList());

        iCache.updateColumns(tableName, columnVos);
        return ResponseData.createSuccessResponse();
    }


}
