/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : code-gen

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 16/07/2022 13:59:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_global
-- ----------------------------
DROP TABLE IF EXISTS `sys_global`;
CREATE TABLE `sys_global`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `global_json` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '全局变量JSON',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_global
-- ----------------------------
INSERT INTO `sys_global` VALUES (1, '{\r\n    \"project\": {\r\n        \"path\": \"\"\r\n    },\r\n    \"author\": \"zhonglunsheng\",\r\n    \"basePackage\": \"com.hello\",\r\n    \"dynamicColumn\": [\r\n        {\r\n            \"title\": \"字段校验\",\r\n            \"key\": \"validate\"\r\n        },\r\n        {\r\n            \"title\": \"字典值\",\r\n            \"key\": \"dict\"\r\n        }\r\n    ],\r\n    \"java\": {\r\n        \"entity\": {\r\n            \"package\": \"io.github.zhonglunsheng.domain\",\r\n            \"path\": \"D:\\\\code\\\\gitee\\\\online-code-gen\\\\src\\\\main\\\\java\\\\io\\\\github\\\\zhonglunsheng\\\\domain\"\r\n        },\r\n        \"service\": {\r\n            \"package\": \"io.github.zhonglunsheng.service\",\r\n            \"path\": \"D:\\\\code\\\\gitee\\\\online-code-gen\\\\src\\\\main\\\\java\\\\io\\\\github\\\\zhonglunsheng\\\\service\"\r\n        },\r\n        \"serviceImpl\": {\r\n            \"package\": \"io.github.zhonglunsheng.service.impl\",\r\n            \"path\": \"D:\\\\code\\\\gitee\\\\online-code-gen\\\\src\\\\main\\\\java\\\\io\\\\github\\\\zhonglunsheng\\\\service\\\\impl\"\r\n        },\r\n        \"mapper\": {\r\n            \"package\": \"io.github.zhonglunsheng.mapper\",\r\n            \"path\": \"D:\\\\code\\\\gitee\\\\online-code-gen\\\\src\\\\main\\\\java\\\\io\\\\github\\\\zhonglunsheng\\\\mapper\"\r\n        },\r\n        \"xml\": {\r\n            \"path\": \"D:\\\\code\\\\gitee\\\\online-code-gen\\\\config\\\\mapper\"\r\n        }\r\n    },\r\n    \"datasource\": {\r\n        \"url\": \"jdbc:mysql://localhost:3306/ruoyi-vue-activiti7?serverTimezone=UTC\",\r\n        \"userName\": \"root\",\r\n        \"password\": \"root\"\r\n    }\r\n}', '2022-07-09 15:35:06', '2022-07-12 14:44:26');

-- ----------------------------
-- Table structure for sys_tpl
-- ----------------------------
DROP TABLE IF EXISTS `sys_tpl`;
CREATE TABLE `sys_tpl`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '模板组名',
  `tpl_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '模板名',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0' COMMENT '1=启用  0=停止',
  `tpl_type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '模板类型 java or python or other',
  `create_time` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `update_time` datetime(0) NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '模板内容',
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '本地生成路径',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注',
  `file_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '生成文件名',
  `file_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '生成文件路径',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uni_group_name`(`tpl_name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_tpl
-- ----------------------------
INSERT INTO `sys_tpl` VALUES (1, 'Java模板', 'test.70a99375f567f.enjoy', '1', 'java', '2022-07-08 12:55:55', '2022-07-15 13:57:51', 'npm install m\r\n#for(x : columns)\r\n#(x.columnName)\r\n#end\r\n\r\n#三生三世{}', '', '模板创建2', '#(table.JavaClassName).html', 'G:\\temp\\hello');
INSERT INTO `sys_tpl` VALUES (3, 'Java模板', 'test2.d4aa15fcf75c5.enjoy', '1', 'java', '2022-07-09 18:21:41', '2022-07-10 14:59:44', '233', NULL, 'test', 'Impl.java', 'G:\\temp\\hello');
INSERT INTO `sys_tpl` VALUES (5, 'java-mybatis-plus模板', 'entity.0726ed0d0ce95.enjoy', '1', 'java', '2022-07-10 21:13:25', '2022-07-10 13:59:14', 'package #(java.entity.package);\r\n\r\nimport com.baomidou.mybatisplus.annotation.IdType;\r\nimport com.baomidou.mybatisplus.annotation.TableField;\r\nimport com.baomidou.mybatisplus.annotation.TableId;\r\nimport com.baomidou.mybatisplus.annotation.TableName;\r\nimport java.io.Serializable;\r\nimport java.util.Date;\r\nimport lombok.Data;\r\nimport io.swagger.annotations.ApiModelProperty;\r\n\r\n/**\r\n * #(table.tableName)\r\n * @author #(author)\r\n * #(now())\r\n */\r\n@TableName(value =\"#(table.tableName)\")\r\n@Data\r\npublic class #(table.javaClassName) implements Serializable {\r\n\r\n#for(column : columns)\r\n#if(column.isPk == \'1\')\r\n    /**\r\n     * #(column.columnComment)\r\n     */\r\n    @TableId(type = IdType.AUTO)\r\n    @ApiModelProperty(\"#(column.columnComment)\")\r\n    private #(column.javaType) #(column.javaField);\r\n#else\r\n    /**\r\n     * #(column.columnComment)\r\n     */\r\n    @ApiModelProperty(\"#(column.columnComment)\")\r\n    private #(column.javaType) #(column.javaField);\r\n#end\r\n#end\r\n}', NULL, 'entity 类生成', '#(table.javaClassName).java', '#(java.entity.path)');
INSERT INTO `sys_tpl` VALUES (6, 'java-mybatis-plus模板', 'service.00fa17f8115a9.enjoy', '1', 'java', '2022-07-10 22:00:06', '2022-07-10 14:20:14', 'package #(java.service.package);\r\n\r\nimport #(java.entity.package).#(table.javaClassName);\r\nimport com.baomidou.mybatisplus.extension.service.IService;\r\n\r\n/**\r\n * #(table.tableName)\r\n * @author #(author)\r\n * #(now())\r\n */\r\npublic interface #(table.javaClassName)Service extends IService<#(table.javaClassName)> {\r\n\r\n}\r\n', NULL, 'service 接口', '#(table.javaClassName)Service.java', '#(java.service.path)');
INSERT INTO `sys_tpl` VALUES (16, 'java-mybatis-plus模板', 'serviceImpl.d628749c4c787.enjoy', '1', 'java', '2022-07-10 22:00:06', '2022-07-10 14:23:18', 'package #(java.serviceImpl.package);\r\n\r\nimport #(java.entity.package).#(table.javaClassName);\r\nimport com.baomidou.mybatisplus.extension.service.IService;\r\n\r\nimport com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;\r\nimport #(java.entity.package).#(table.javaClassName);\r\nimport #(java.service.package).#(table.javaClassName)Service;\r\nimport #(java.mapper.package).#(table.javaClassName)Mapper;\r\nimport org.springframework.stereotype.Service;\r\n\r\n/**\r\n * #(table.tableName)\r\n * @author #(author)\r\n * #(now())\r\n */\r\n@Service\r\npublic class #(table.javaClassName)ServiceImpl extends ServiceImpl<#(table.javaClassName)Mapper, #(table.javaClassName)>\r\n    implements #(table.javaClassName)Service{\r\n\r\n}\r\n', NULL, 'service 实现 ', '#(table.javaClassName)ServiceImpl.java', '#(java.serviceImpl.path)');
INSERT INTO `sys_tpl` VALUES (17, 'java-mybatis-plus模板', 'mapper.db75eea2ced59.enjoy', '1', 'java', '2022-07-10 22:00:06', '2022-07-10 14:28:35', 'package #(java.mapper.package);\r\n\r\nimport #(java.entity.package).#(table.javaClassName);\r\nimport com.baomidou.mybatisplus.core.mapper.BaseMapper;\r\n\r\n/**\r\n * #(table.tableName)\r\n * @author #(author)\r\n * #(now())\r\n */\r\npublic interface #(table.javaClassName)Mapper extends BaseMapper<#(table.javaClassName)> {\r\n\r\n}', NULL, 'mapper接口', '#(table.javaClassName)Mapper.java', '#(java.mapper.path)');
INSERT INTO `sys_tpl` VALUES (18, 'java-mybatis-plus模板', 'xml.80ca20b244feb.enjoy', '1', 'java', '2022-07-10 22:00:06', '2022-07-10 14:50:52', '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<!DOCTYPE mapper\r\n        PUBLIC \"-//mybatis.org//DTD Mapper 3.0//EN\"\r\n        \"http://mybatis.org/dtd/mybatis-3-mapper.dtd\">\r\n<mapper namespace=\"#(java.mapper.package).#(table.javaClassName)Mapper\">\r\n\r\n    <resultMap id=\"BaseResultMap\" type=\"#(java.entity.package).#(table.javaClassName)\">\r\n#for(column : columns)\r\n#if(column.isPk == \'1\')\r\n            <id property=\"#(column.javaField)\" column=\"#(column.columnName)\"/>\r\n#else\r\n            <result property=\"#(column.javaField)\" column=\"#(column.columnName)\"/>\r\n#end\r\n#end\r\n    </resultMap>\r\n#set(fields = [])\r\n#for(column : columns)\r\n#if(fields.add(column.columnName))\r\n#end\r\n#end\r\n    <sql id=\"Base_Column_List\">\r\n        #(join(fields, \',\'))\r\n    </sql>\r\n</mapper>', NULL, 'mapper xml', '#(table.javaClassName)Mapper.xml', '#(java.xml.path)');

SET FOREIGN_KEY_CHECKS = 1;
