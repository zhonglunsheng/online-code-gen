package io.github.zhonglunsheng.core.jdbc;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.bean.copier.CopyOptions;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.JdbcUtils;
import org.springframework.lang.Nullable;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

public class MyColumnRowMapper<T> implements RowMapper<T> {

    @Nullable
    private final Class<?> requiredType;

    public MyColumnRowMapper(Class requiredType) {
        this.requiredType = requiredType;
    }

    @Override
    public T mapRow(ResultSet rs, int rowNum) throws SQLException {
        ResultSetMetaData rsmd = rs.getMetaData();
        int columnCount = rsmd.getColumnCount();
        Map<String, Object> mapOfColumnValues = new HashMap<>();
        for (int i = 1; i <= columnCount; i++) {
            String column = JdbcUtils.lookupColumnName(rsmd, i);
            mapOfColumnValues.putIfAbsent(column, JdbcUtils.getResultSetValue(rs, i));
        }
        return (T) BeanUtil.toBean(mapOfColumnValues, requiredType, CopyOptions.create());
    }
}
