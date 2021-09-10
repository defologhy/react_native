/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 100420
 Source Host           : localhost:3306
 Source Schema         : yasin_api

 Target Server Type    : MySQL
 Target Server Version : 100420
 File Encoding         : 65001

 Date: 10/09/2021 12:52:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nik` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `jk` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `notelp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `jwt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, '16217261', 'Administrator', 'Laki-Laki', 'Islam', 'Sukabumi, Indonesia', '0815261251', 'admin', '$2y$10$5kbvSWanomrZbzPkKmHK7.UFqhDwcl7EsF7ss5fviUmfZrGpSEk4S', 'person.jpg', NULL, '2021-09-03 09:26:42');

-- ----------------------------
-- Table structure for informasi
-- ----------------------------
DROP TABLE IF EXISTS `informasi`;
CREATE TABLE `informasi`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `judul` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `deksripsi` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `foto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of informasi
-- ----------------------------
INSERT INTO `informasi` VALUES (2, 'judul 1', 'deksripsi 1', '2021-09-01 14:31:52', 'pengumuman.png');
INSERT INTO `informasi` VALUES (4, 'judul 2', 'deksripsi 2', '2021-09-02 11:46:03', 'pengumuman.png');
INSERT INTO `informasi` VALUES (5, 'judul 3', 'deksripsi 3', '2021-09-02 11:46:24', 'pengumuman.png');
INSERT INTO `informasi` VALUES (6, 'judul 4', 'deksripsi 4', '2021-09-02 11:46:47', 'pengumuman.png');
INSERT INTO `informasi` VALUES (7, 'judul 5', 'deksripsi 5', '2021-09-02 11:55:51', 'pengumuman.png');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (1, '2021_09_01_063112_create_table_informasi', 1);
INSERT INTO `migrations` VALUES (2, '2021_09_01_074302_add_column_foto_table_informasi', 2);
INSERT INTO `migrations` VALUES (3, '2021_09_01_080548_create_table_users', 3);
INSERT INTO `migrations` VALUES (4, '2021_09_01_080557_create_table_admin', 3);
INSERT INTO `migrations` VALUES (5, '2021_09_02_064750_add_column_jwt_users_admin', 4);
INSERT INTO `migrations` VALUES (6, '2021_09_02_074438_create_table_token', 5);
INSERT INTO `migrations` VALUES (7, '2021_09_04_033102_add_column_name_admin_users', 6);

-- ----------------------------
-- Table structure for token
-- ----------------------------
DROP TABLE IF EXISTS `token`;
CREATE TABLE `token`  (
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of token
-- ----------------------------
INSERT INTO `token` VALUES ('61gQ021PliXmLMAlqq2AJ3DlSoZFvxV0UdvMhdP45fbxsSKQelAfkn6zsYaj8iMY');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nis` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `jk` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `notelp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `jurusan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(3000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `berkas` varchar(3000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `alasan_tolak` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `jwt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '123345', 'Rostamela', 'Perempuan', 'Islam', 'Sukabumi, Indonesia', '0815261251', 'Fiqih', 'person.jpg', 'person.jpg', 'Proses', '', 'users1', '$2y$10$xczmx9wYh191m1SugFFcRutm6ArRI4dpaIbesUikH1YdieGXzaad6', NULL, '2021-09-03 09:26:42');
INSERT INTO `users` VALUES (2, '128126', 'Defitra', 'Laki-Laki', 'Islam', 'Sukabumi, Indonesia', '0815261251', 'Fiqih', 'person_male.png', 'person_male.png', 'Proses', '', 'users2', '$2y$10$xczmx9wYh191m1SugFFcRutm6ArRI4dpaIbesUikH1YdieGXzaad6', NULL, '2021-09-03 09:26:42');
INSERT INTO `users` VALUES (3, '1235647', 'Yasin M', 'Laki-Laki', 'Islam', 'sukabumi, indonesia', '0896152515', 'Fiqih', 'cm5faW1hZ2VfcGlja2VyX2xpYl90ZW1wXzU2YzIxNmEyLWZlZTItNDUwNS1hOWQyLTBiMjY4MzE0YmFhOQ==.jpg', 'cm5faW1hZ2VfcGlja2VyX2xpYl90ZW1wX2MxOThhYjRmLWVlYjUtNDkzOS1iZDYwLTU3ZjhhY2MxNzZkNg==.jpg', 'Proses', '', 'yasin', '$2y$10$6Fu6gSeP4hZDbtcu/PjFsevCdyhRiN8.9AiiaxTETJD.aQqZ5c/sW', NULL, '2021-09-06 13:54:23');
INSERT INTO `users` VALUES (4, '1562532', 'M Yasin', 'Laki-Laki', 'Islam', 'sukabumi, indonesia', '0815162516', 'Fiqih', 'cm5faW1hZ2VfcGlja2VyX2xpYl90ZW1wX2ExYjgyZDk5LTgxOWEtNGUxMi05Y2U1LTEyMWU0ZDZlM2FjNA==.jpg', 'cm5faW1hZ2VfcGlja2VyX2xpYl90ZW1wXzk2ZDhiNGVmLWE1YjYtNDI1NC05M2I5LTBlYjZmOGIyMjRkMQ==.jpg', 'Proses', '', 'myasin', '$2y$10$xzFI/YGo59dI0nlRubl0zuofwSn/6hpGN.HD7whZQAvRJZR2pkt2G', NULL, '2021-09-06 13:58:51');

SET FOREIGN_KEY_CHECKS = 1;
