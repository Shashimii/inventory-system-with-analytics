-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2024 at 11:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `imsdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `company_clients`
--

CREATE TABLE `company_clients` (
  `id` int(11) NOT NULL,
  `company_code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company_clients`
--

INSERT INTO `company_clients` (`id`, `company_code`) VALUES
(1, 'SODEXO'),
(13, 'VP101');

-- --------------------------------------------------------

--
-- Table structure for table `fg_data`
--

CREATE TABLE `fg_data` (
  `id` int(11) NOT NULL,
  `action_date` varchar(255) NOT NULL,
  `action_time` varchar(255) NOT NULL,
  `action_by` varchar(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_desc` varchar(255) NOT NULL,
  `item_lot` varchar(255) NOT NULL,
  `item_bin` varchar(255) NOT NULL,
  `from_rm_name` varchar(255) NOT NULL,
  `from_rm_id` varchar(255) NOT NULL,
  `quantity_pcs` int(11) DEFAULT NULL,
  `pack_small` int(11) DEFAULT NULL,
  `pack_medium` int(11) DEFAULT NULL,
  `pack_large` int(11) DEFAULT NULL,
  `item_data_status` varchar(255) NOT NULL,
  `item_data_active` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fg_data`
--

INSERT INTO `fg_data` (`id`, `action_date`, `action_time`, `action_by`, `item_name`, `item_desc`, `item_lot`, `item_bin`, `from_rm_name`, `from_rm_id`, `quantity_pcs`, `pack_small`, `pack_medium`, `pack_large`, `item_data_status`, `item_data_active`) VALUES
(1, '04/27/2024', '01:09 PM', 'Developer', 'Interfolded', '150mm', 'Batch1', 'F001', 'RawMat0', 'ID001', 1000, NULL, NULL, NULL, 'Received', 'Y'),
(2, '04/27/2024', '01:09 PM', 'Developer', 'Interfolded', '150mm', 'Batch1', 'F001', 'RawMat0', 'ID001', 984, NULL, NULL, NULL, 'Float', 'Y'),
(3, '04/27/2024', '01:10 PM', 'Developer', 'Interfolded', '150mm', 'Batch2', 'F002', 'RawMat1', 'ID002', 2000, NULL, NULL, NULL, 'Received', 'Y'),
(4, '04/27/2024', '01:10 PM', 'Developer', 'Interfolded', '150mm', 'Batch2', 'F002', 'RawMat1', 'ID002', 1936, NULL, NULL, NULL, 'Float', 'Y'),
(5, '06/27/2024', '01:10 PM', 'Developer', 'Jumbo Roll', '120mm', 'Batch1', 'F003', 'RawMat3', 'ID003', 500, NULL, NULL, NULL, 'Received', 'Y'),
(6, '04/27/2024', '01:10 PM', 'Developer', 'Jumbo Roll', '120mm', 'Batch1', 'F003', 'RawMat3', 'ID003', 468, NULL, NULL, NULL, 'Float', 'Y'),
(7, '04/27/2024', '01:11 PM', 'Developer', 'Jumbo Roll', '120mm', 'Batch1', 'F003', 'RawMat3', 'ID003', 468, NULL, NULL, 32, 'InUse', 'Y'),
(8, '04/27/2024', '01:12 PM', 'Developer', 'Interfolded', '150mm', 'Batch2', 'F002', 'RawMat1', 'ID002', 1968, NULL, NULL, 32, 'InUse', 'Y'),
(9, '04/27/2024', '01:15 PM', 'Developer', 'Interfolded', '150mm', 'Batch1', 'F001', 'RawMat0', 'ID001', 984, 16, NULL, NULL, 'InUse', 'Y'),
(10, '04/28/2024', '12:02 PM', 'Developer', 'Interfolded', '150mm', 'Batch2', 'F002', 'RawMat1', 'ID002', 1936, NULL, NULL, 32, 'InUse', 'Y'),
(11, '06/29/2024', '11:29 AM', 'Developer', 'Interfolded', '150mm', 'Batch1', 'F001', 'RawMat1', 'Test1', 1000, NULL, NULL, NULL, 'Received', 'Y'),
(12, '04/29/2024', '11:29 AM', 'Developer', 'Interfolded', '150mm', 'Batch1', 'F001', 'RawMat1', 'Test1', 1000, NULL, NULL, NULL, 'Float', 'Y'),
(13, '07/29/2024', '01:08 PM', 'Developer', 'Interfolded', '150mm', 'Batch2', 'F001', 'RawMat0', 'Test', 500, NULL, NULL, NULL, 'Received', 'Y'),
(14, '04/29/2024', '01:08 PM', 'Developer', 'Interfolded', '150mm', 'Batch2', 'F001', 'RawMat0', 'Test', 500, NULL, NULL, NULL, 'Float', 'Y'),
(15, '04/29/2024', '09:14 PM', 'Developer', 'Jumbo Roll', '120mm', 'Batch1', 'P001', 'RawMat3', 'ID10100', 3000, NULL, NULL, NULL, 'Received', 'Y'),
(16, '04/29/2024', '09:14 PM', 'Developer', 'Jumbo Roll', '120mm', 'Batch1', 'P001', 'RawMat3', 'ID10100', 3000, NULL, NULL, NULL, 'Float', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `fg_registered`
--

CREATE TABLE `fg_registered` (
  `id` int(11) NOT NULL,
  `fg_name` varchar(255) NOT NULL,
  `fg_description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fg_registered`
--

INSERT INTO `fg_registered` (`id`, `fg_name`, `fg_description`) VALUES
(2, 'Jumbo Roll', '120mm'),
(7, 'IRT', '150mm'),
(8, 'Interfolded', '150mm');

-- --------------------------------------------------------

--
-- Table structure for table `products_data`
--

CREATE TABLE `products_data` (
  `id` int(11) NOT NULL,
  `action_date` varchar(255) NOT NULL,
  `action_time` varchar(255) NOT NULL,
  `action_by` varchar(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_desc` varchar(255) NOT NULL,
  `item_id` varchar(255) NOT NULL,
  `item_lot` varchar(255) NOT NULL,
  `item_bin` varchar(255) NOT NULL,
  `pack_small` int(11) DEFAULT NULL,
  `pack_medium` int(11) DEFAULT NULL,
  `pack_large` int(11) DEFAULT NULL,
  `shipped_quantity` int(11) DEFAULT NULL,
  `client_company` varchar(255) NOT NULL,
  `item_data_status` varchar(255) NOT NULL,
  `item_data_active` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products_data`
--

INSERT INTO `products_data` (`id`, `action_date`, `action_time`, `action_by`, `item_name`, `item_desc`, `item_id`, `item_lot`, `item_bin`, `pack_small`, `pack_medium`, `pack_large`, `shipped_quantity`, `client_company`, `item_data_status`, `item_data_active`) VALUES
(1, '04/27/2024', '01:11 PM', 'Developer', 'Jumbo Roll', '120mm', 'JRT15010121K', 'Batch1', 'P001', NULL, NULL, 32, NULL, '', 'Received', 'N'),
(2, '04/27/2024', '01:12 PM', 'Developer', 'Interfolded', '150mm', 'IRT15011121K', 'Batch1', 'P002', NULL, NULL, 32, NULL, '', 'Received', 'N'),
(3, '04/27/2024', '01:15 PM', 'Developer', 'Interfolded', '150mm', 'IRT15110121K', 'Batch2', 'P003', 16, NULL, NULL, NULL, '', 'Received', 'N'),
(4, '04/27/2024', '01:15 PM', 'Developer', 'Interfolded', '150mm', 'IRT15011121K', 'Batch1', 'P002', NULL, NULL, NULL, 32, 'SODEXO', 'Shipped', 'Y'),
(5, '04/28/2024', '12:02 PM', 'Developer', 'Interfolded', '150mm', 'ID0010', 'Batch1', 'F0010', NULL, NULL, 32, NULL, '', 'Received', 'N'),
(6, '05/28/2024', '12:03 PM', 'Developer', 'Interfolded', '150mm', 'ID0010', 'Batch1', 'F0010', NULL, NULL, NULL, 32, 'SODEXO', 'Shipped', 'Y'),
(7, '05/28/2024', '12:05 PM', 'Developer', 'Interfolded', '150mm', 'IRT15110121K', 'Batch2', 'P003', NULL, NULL, NULL, 16, 'VP101', 'Shipped', 'Y'),
(8, '05/29/2024', '09:09 PM', 'Developer', 'Jumbo Roll', '120mm', 'JRT15010121K', 'Batch1', 'P001', NULL, NULL, NULL, 32, 'SODEXO', 'Shipped', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `products_registered`
--

CREATE TABLE `products_registered` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products_registered`
--

INSERT INTO `products_registered` (`id`, `product_name`, `product_desc`) VALUES
(1, 'Interfolded', '150mm'),
(5, 'Jumbo Roll', '120mm');

-- --------------------------------------------------------

--
-- Table structure for table `rm_adj_data`
--

CREATE TABLE `rm_adj_data` (
  `id` int(11) NOT NULL,
  `action_date` varchar(255) NOT NULL,
  `action_time` varchar(255) NOT NULL,
  `action_by` varchar(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_id` varchar(255) NOT NULL,
  `receive_quantity` int(11) NOT NULL,
  `adj_receive` int(11) NOT NULL,
  `fg_pcs_quantity` int(11) NOT NULL,
  `adj_fg_pcs` int(11) NOT NULL,
  `fg_ply_quantity` int(11) NOT NULL,
  `adj_fg_ply` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rm_adj_data`
--

INSERT INTO `rm_adj_data` (`id`, `action_date`, `action_time`, `action_by`, `item_name`, `item_id`, `receive_quantity`, `adj_receive`, `fg_pcs_quantity`, `adj_fg_pcs`, `fg_ply_quantity`, `adj_fg_ply`) VALUES
(1, '01/04/2024', '12:01 AM', 'Developer', 'RawMat0', 'Test1', 1, 5, 0, 0, 0, 0),
(2, '01/04/2024', '12:03 AM', 'Developer', 'RawMat0', 'Test1', 5, 1, 0, 0, 0, 0),
(3, '01/04/2024', '12:48 AM', 'Developer', 'RawMat0', 'Test1', 1, 5, 0, 0, 0, 0),
(4, '01/04/2024', '12:57 AM', 'Developer', 'RawMat0', 'Test1', 5, 3, 0, 0, 0, 0),
(5, '01/04/2024', '12:59 AM', 'Developer', 'RawMat0', 'Test2', 3, 1, 0, 0, 0, 0),
(6, '01/04/2024', '12:59 AM', 'Developer', 'RawMat0', 'Test2', 1, 3, 0, 0, 0, 0),
(7, '01/04/2024', '08:31 PM', 'Developer', 'RawMat0', 'Test2', 3, 1, 0, 0, 0, 0),
(8, '05/04/2024', '09:51 PM', 'Developer', 'RawMat0', 'Test010', 1070, 1, 0, 0, 0, 0),
(9, '05/04/2024', '09:53 PM', 'Developer', 'RawMat0', 'Test010', 1070, 2, 0, 0, 0, 0),
(10, '05/04/2024', '09:54 PM', 'Developer', 'RawMat0', 'Test010', 2, 1, 0, 0, 0, 0),
(11, '05/04/2024', '09:55 PM', 'Developer', 'RawMat0', 'Test010', 1, 5, 0, 0, 0, 0),
(12, '05/04/2024', '10:01 PM', 'Developer', 'RawMat0', 'Test010', 5, 1, 0, 0, 0, 0),
(13, '05/04/2024', '10:01 PM', 'Developer', 'RawMat0', 'Test010', 1, 2, 0, 0, 0, 0),
(14, '05/04/2024', '10:01 PM', 'Developer', 'RawMat0', 'Test010', 1, 2, 0, 0, 0, 0),
(15, '05/04/2024', '10:15 PM', 'Developer', 'RawMat0', 'Test010', 2, 10, 0, 0, 0, 0),
(16, '05/04/2024', '10:15 PM', 'Developer', 'RawMat0', 'Test010', 2, 10, 0, 0, 0, 0),
(17, '05/04/2024', '10:16 PM', 'Developer', 'RawMat0', 'Test010', 2, 10, 0, 0, 0, 0),
(18, '05/04/2024', '10:16 PM', 'Developer', 'RawMat0', 'Test010', 2, 10, 0, 0, 0, 0),
(19, '05/04/2024', '10:16 PM', 'Developer', 'RawMat0', 'Test010', 2, 10, 0, 0, 0, 0),
(20, '05/04/2024', '10:17 PM', 'Developer', 'RawMat0', 'Test010', 10, 1, 0, 0, 0, 0),
(21, '05/04/2024', '10:18 PM', 'Developer', 'RawMat0', 'Test010', 10, 1, 0, 0, 0, 0),
(22, '05/04/2024', '10:18 PM', 'Developer', 'RawMat0', 'Test010', 1, 2, 0, 0, 0, 0),
(23, '05/04/2024', '10:18 PM', 'Developer', 'RawMat0', 'Test010', 2, 3, 0, 0, 0, 0),
(24, '05/04/2024', '10:21 PM', 'Developer', 'RawMat0', 'Test010', 3, 2, 0, 0, 0, 0),
(25, '05/04/2024', '10:21 PM', 'Developer', 'RawMat0', 'Test010', 2, 4, 0, 0, 0, 0),
(26, '06/04/2024', '09:08 AM', 'Developer', 'RawMat0', 'Test010', 4, 1, 0, 0, 0, 0),
(27, '06/04/2024', '12:18 PM', 'Developer', 'RawMat0', 'Test2', 1, 2, 0, 0, 0, 0),
(28, '06/04/2024', '12:18 PM', 'Developer', 'RawMat0', 'Test2', 2, 10, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `rm_data`
--

CREATE TABLE `rm_data` (
  `id` int(11) NOT NULL,
  `action_date` varchar(255) NOT NULL,
  `action_time` varchar(255) NOT NULL,
  `action_by` varchar(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_desc` varchar(255) NOT NULL,
  `item_id` varchar(255) NOT NULL,
  `item_lot` varchar(255) NOT NULL,
  `item_bin` varchar(255) NOT NULL,
  `quantity_receive` int(11) DEFAULT NULL,
  `quantity_inProduction` int(11) DEFAULT NULL,
  `quantity_scrap` int(11) DEFAULT NULL,
  `quantity_used` int(11) DEFAULT NULL,
  `fg_created_name` varchar(255) NOT NULL,
  `fg_created_desc` varchar(255) NOT NULL,
  `quantity_created_pcs` int(11) DEFAULT NULL,
  `item_data_status` varchar(255) NOT NULL,
  `item_data_active` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rm_data`
--

INSERT INTO `rm_data` (`id`, `action_date`, `action_time`, `action_by`, `item_name`, `item_desc`, `item_id`, `item_lot`, `item_bin`, `quantity_receive`, `quantity_inProduction`, `quantity_scrap`, `quantity_used`, `fg_created_name`, `fg_created_desc`, `quantity_created_pcs`, `item_data_status`, `item_data_active`) VALUES
(1, '04/27/2024', '01:06 PM', 'Developer', 'RawMat0', 'Test0', 'ID001', 'Batch1', 'R001', 1000, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(2, '04/27/2024', '01:07 PM', 'Developer', 'RawMat1', 'Test1', 'ID002', 'Batch1', 'R002', 1000, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(3, '04/27/2024', '01:07 PM', 'Developer', 'RawMat3', 'Test3', 'ID003', 'Batch1', 'R003', 700, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(4, '04/27/2024', '01:07 PM', 'Developer', 'RawMat3', 'Test3', 'ID003', 'Batch1', 'R003', NULL, 700, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(5, '04/27/2024', '01:08 PM', 'Developer', 'RawMat1', 'Test1', 'ID002', 'Batch1', 'R002', NULL, 1000, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(6, '04/27/2024', '01:08 PM', 'Developer', 'RawMat0', 'Test0', 'ID001', 'Batch1', 'R001', NULL, 1000, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(7, '04/27/2024', '01:09 PM', 'Developer', 'RawMat0', 'Test0', 'ID001', 'Batch1', 'R001', NULL, NULL, 100, 900, 'Interfolded', '150mm', 1000, 'Depleted', 'Y'),
(8, '04/27/2024', '01:10 PM', 'Developer', 'RawMat1', 'Test1', 'ID002', 'Batch1', 'R002', NULL, NULL, 100, 900, 'Interfolded', '150mm', 2000, 'Depleted', 'Y'),
(9, '04/27/2024', '01:10 PM', 'Developer', 'RawMat3', 'Test3', 'ID003', 'Batch1', 'R003', NULL, NULL, 100, 600, 'Jumbo Roll', '120mm', 500, 'Depleted', 'Y'),
(10, '04/27/2024', '01:17 PM', 'Developer', 'RawMat0', 'Test0', 'Test', 'Batch2', 'Test', 10000, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(11, '04/27/2024', '01:18 PM', 'Developer', 'RawMat1', 'Test1', 'Test1', 'Batch2', 'Test', 5000, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(12, '04/29/2024', '08:17 AM', 'Developer', 'RawMat1', 'Test1', 'Test1', 'Batch2', 'Test', NULL, 5000, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(13, '04/29/2024', '08:17 AM', 'Developer', 'RawMat0', 'Test0', 'Test', 'Batch2', 'Test', NULL, 10000, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(14, '04/29/2024', '08:19 AM', 'Developer', 'RawMat3', 'Test3', 'ID10100', 'Batch1', 'R1000', 1000, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(15, '04/29/2024', '08:20 AM', 'Developer', 'RawMat3', 'Test3', 'ID11000', 'Batch2', 'R0001', 10000, NULL, NULL, NULL, '', '', NULL, 'Received', 'Y'),
(16, '04/29/2024', '11:29 AM', 'Developer', 'RawMat1', 'Test1', 'Test1', 'Batch2', 'Test', NULL, NULL, 1000, 4000, 'Interfolded', '150mm', 1000, 'Depleted', 'Y'),
(17, '04/29/2024', '01:08 PM', 'Developer', 'RawMat0', 'Test0', 'Test', 'Batch2', 'Test', NULL, NULL, 1000, 9000, 'Interfolded', '150mm', 500, 'Depleted', 'Y'),
(18, '04/29/2024', '09:14 PM', 'Developer', 'RawMat3', 'Test3', 'ID10100', 'Batch1', 'R1000', NULL, 1000, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(19, '04/29/2024', '09:14 PM', 'Developer', 'RawMat3', 'Test3', 'ID10100', 'Batch1', 'R1000', NULL, NULL, 100, 900, 'Jumbo Roll', '120mm', 3000, 'Depleted', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `rm_registered`
--

CREATE TABLE `rm_registered` (
  `id` int(11) NOT NULL,
  `rm_name` varchar(255) NOT NULL,
  `rm_description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rm_registered`
--

INSERT INTO `rm_registered` (`id`, `rm_name`, `rm_description`) VALUES
(1, 'RawMat0', 'Test0'),
(2, 'RawMat1', 'Test1'),
(3, 'RawMat3', 'Test3'),
(14, 'asda', 'asdsa'),
(15, 'sad', 'asda'),
(17, 'asdas', 'asdasaaa');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_password` int(11) NOT NULL,
  `user_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `user_password`, `user_type`) VALUES
(1, 'Admin', 12345678, 'Admin'),
(2, 'Admin2', 12312112, 'Admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company_clients`
--
ALTER TABLE `company_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fg_data`
--
ALTER TABLE `fg_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fg_registered`
--
ALTER TABLE `fg_registered`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products_data`
--
ALTER TABLE `products_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products_registered`
--
ALTER TABLE `products_registered`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rm_adj_data`
--
ALTER TABLE `rm_adj_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rm_data`
--
ALTER TABLE `rm_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rm_registered`
--
ALTER TABLE `rm_registered`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company_clients`
--
ALTER TABLE `company_clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `fg_data`
--
ALTER TABLE `fg_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `fg_registered`
--
ALTER TABLE `fg_registered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products_data`
--
ALTER TABLE `products_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products_registered`
--
ALTER TABLE `products_registered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rm_adj_data`
--
ALTER TABLE `rm_adj_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `rm_data`
--
ALTER TABLE `rm_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `rm_registered`
--
ALTER TABLE `rm_registered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
