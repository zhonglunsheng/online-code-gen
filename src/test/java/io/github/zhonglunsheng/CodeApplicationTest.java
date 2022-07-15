package io.github.zhonglunsheng;


import io.github.zhonglunsheng.core.cache.ICache;
import io.github.zhonglunsheng.core.jdbc.MyColumnRowMapper;
import io.github.zhonglunsheng.core.template.TemplateService;
import io.github.zhonglunsheng.domain.GenTable;
import io.github.zhonglunsheng.domain.GenTableColumn;
import io.github.zhonglunsheng.domain.SysTpl;
import io.github.zhonglunsheng.domain.vo.ColumnVo;
import io.github.zhonglunsheng.service.GenTableService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SingleColumnRowMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

@SpringBootTest(classes = CodeApplication.class)
public class CodeApplicationTest {

    @Autowired
    private TemplateService templateService;

    @Autowired
    private GenTableService genTableService;


    @Test
    public void testGen () {
        String tplContent = "#(x + 123)";
        Map<String, Object> data = new HashMap<>();
        data.put("x", 23);
        String s = templateService.generateTemplate(tplContent, data);
        System.out.println("s = " + s);
    }

    @Test
    public void testGetTableList () {
        List<GenTable> genTables = genTableService.selectTableByName();

        System.out.println("list = " + genTables);

    }

    @Test
    public void testGetTableColumn () {
        List<GenTableColumn> genTables = genTableService.selectDbTableColumnsByName("sys_app");

        System.out.println("list = " + genTables);
    }

    @Autowired
    private ICache iCache;

    @Test
    public void testCache() {
        List<ColumnVo> sys_app = iCache.getColumnVo("sys_app");
        System.out.println("sys_app = " + sys_app);
    }

    @Autowired
    private JdbcTemplate jdbcTemplate;


    @Test
    public void testJdbc () {
//        Map<String, Object> stringObjectMap = jdbcTemplate.queryForMap("select * from sys_dict_data where id=?", 1265216536659087357L);
//        System.out.println(stringObjectMap);

//        List maps = jdbcTemplate.queryForList("select * from sys_tpl", List.class);
//        System.out.println(maps);
//
//        List<SysTpl> query = jdbcTemplate.query("select * from sys_tpl", new MyColumnRowMapper<>(SysTpl.class));
//        System.out.println(query);


//        jdbcTemplate.update

//        int update = jdbcTemplate.update("insert into test (id) values (?)", new Object[]{1});
//        System.out.println("update = " + update);

//        JdbcTemplateFactory<SysTpl>.JdbcTemplateHelper jdbcTemplateHelper = jdbcTemplateFactory.getInstance(jdbcTemplate, "sys_tpl");
//
//
//        List<SysTpl> sysTpls = jdbcTemplateHelper.queryAll(SysTpl.class);

//        System.out.println(sysTpls);


    }


}
