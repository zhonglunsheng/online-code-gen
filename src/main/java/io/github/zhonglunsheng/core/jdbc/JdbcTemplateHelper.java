package io.github.zhonglunsheng.core.jdbc;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.ArrayUtil;
import cn.hutool.core.util.StrUtil;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class JdbcTemplateHelper<T> {

    private JdbcTemplate jdbcTemplate;

    private String tableName;

    public JdbcTemplateHelper(JdbcTemplate jdbcTemplate, String tableName) {
        this.jdbcTemplate = jdbcTemplate;
        this.tableName = tableName;
    }


    public List<T> queryAll(Class<T> clazz) {
        return jdbcTemplate.query(String.format("select * from %s", tableName), new MyColumnRowMapper<>(clazz));
    }

    public int saveOrUpdate(T obj, String primary) {
        Map<String, Object> map = BeanUtil.beanToMap(obj);
        if (map.get(primary) == null || StrUtil.isBlank(String.valueOf(map.get(primary)))) {
            // 新增
            CollUtil.join(map.keySet(), ",");
            List<String> keys = new ArrayList<>();
            List<Object> values = new ArrayList<>();
            List<String> param = new ArrayList<>();

            map.forEach((k, v) -> {
                keys.add(StrUtil.toUnderlineCase(k));
                values.add(v);
                param.add("?");
            });

            return jdbcTemplate.update(String.format("insert into %s (%s) values (%s)", tableName, CollUtil.join(keys, ","), CollUtil.join(param, ",")),
                    ArrayUtil.toArray(values, Object.class));

        } else {
            // 更新
            CollUtil.join(map.keySet(), ",");
            List<String> keys = new ArrayList<>();
            List<Object> values = new ArrayList<>();

            map.forEach((k, v) -> {
                if (v != null) {
                    keys.add(StrUtil.toUnderlineCase(k));
                    values.add(v);
                }
            });

            int size = keys.size();
            List<String> setParam = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                setParam.add(String.format(" %s = ?", keys.get(i)));
            }

            return jdbcTemplate.update(
                    String.format(
                            "update %s set %s where %s = %s",
                            tableName,
                            CollUtil.join(setParam, ","),
                            primary,
                            map.get(primary).toString()
                    ),
                    ArrayUtil.toArray(values, Object.class));

        }
    }

    public int delete(T obj, String primary) {
        Map<String, Object> map = BeanUtil.beanToMap(obj);
        if (StrUtil.isNotBlank(map.get(primary).toString())) {
            return jdbcTemplate.update(String.format("delete from %s where %s = ?", tableName, primary), map.get(primary));
        }
        return 0;
    }
}



