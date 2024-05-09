-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2024 at 03:35 PM
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
  `item_id` varchar(255) NOT NULL,
  `item_desc` varchar(255) NOT NULL,
  `item_lot` varchar(255) NOT NULL,
  `item_bin` varchar(255) NOT NULL,
  `quantity_pcs` int(11) DEFAULT NULL,
  `pack_small` int(11) DEFAULT NULL,
  `pack_medium` int(11) DEFAULT NULL,
  `pack_large` int(11) DEFAULT NULL,
  `item_data_status` varchar(255) NOT NULL,
  `item_data_active` varchar(255) NOT NULL,
  `quantity_IN` int(11) DEFAULT NULL,
  `quantity_OUT` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fg_data`
--

INSERT INTO `fg_data` (`id`, `action_date`, `action_time`, `action_by`, `item_name`, `item_id`, `item_desc`, `item_lot`, `item_bin`, `quantity_pcs`, `pack_small`, `pack_medium`, `pack_large`, `item_data_status`, `item_data_active`, `quantity_IN`, `quantity_OUT`) VALUES
(1, '05/08/2024', '03:31 PM', 'Developer', 'Interfolded', 'FINT000001', '150mm', 'Batch1', 'W2A1', 1000, NULL, NULL, NULL, 'Received', 'Y', 1000, NULL),
(2, '05/08/2024', '03:31 PM', 'Developer', 'Interfolded', 'FINT000001', '150mm', 'Batch1', 'W2A1', 980, NULL, NULL, NULL, 'Float', 'Y', NULL, NULL),
(3, '05/08/2024', '04:03 PM', 'Developer', 'Interfolded', 'FINT000001', '150mm', 'Batch1', 'W2A1', 990, 10, NULL, NULL, 'InUse', 'Y', NULL, 10),
(4, '05/08/2024', '04:13 PM', 'Developer', 'Interfolded', 'FINT000001', '150mm', 'Batch1', 'W2A1', 980, 10, NULL, NULL, 'InUse', 'Y', NULL, 10),
(5, '05/09/2024', '08:36 AM', 'Developer', 'Interfolded', 'FINT000002', '150mm', 'Batch1', 'W2A1', 200, NULL, NULL, NULL, 'Received', 'Y', 200, NULL),
(6, '05/09/2024', '08:36 AM', 'Developer', 'Interfolded', 'FINT000002', '150mm', 'Batch1', 'W2A1', 200, NULL, NULL, NULL, 'Float', 'Y', NULL, NULL),
(7, '05/09/2024', '08:45 AM', 'Developer', 'Interfolded', 'FINT000003', '150mm', 'Batch2', 'W2A1', 200, NULL, NULL, NULL, 'Received', 'Y', 200, NULL),
(8, '05/09/2024', '08:45 AM', 'Developer', 'Interfolded', 'FINT000003', '150mm', 'Batch2', 'W2A1', 200, NULL, NULL, NULL, 'Float', 'Y', NULL, NULL),
(9, '05/09/2024', '09:12 AM', 'Developer', 'Jumbo Roll', 'FJUM000001', '120mm', 'Batch1', 'W2A1', 200, NULL, NULL, NULL, 'Received', 'Y', 200, NULL),
(10, '05/09/2024', '09:12 AM', 'Developer', 'Jumbo Roll', 'FJUM000001', '120mm', 'Batch1', 'W2A1', 200, NULL, NULL, NULL, 'Float', 'Y', NULL, NULL);

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
  `item_data_active` varchar(255) NOT NULL,
  `quantity_IN` int(11) DEFAULT NULL,
  `quantity_OUT` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products_data`
--

INSERT INTO `products_data` (`id`, `action_date`, `action_time`, `action_by`, `item_name`, `item_desc`, `item_id`, `item_lot`, `item_bin`, `pack_small`, `pack_medium`, `pack_large`, `shipped_quantity`, `client_company`, `item_data_status`, `item_data_active`, `quantity_IN`, `quantity_OUT`) VALUES
(10, '05/08/2024', '04:03 PM', 'Developer', 'Interfolded', '150mm', 'PINT000001', 'Batch1', 'W3A1', 10, NULL, NULL, NULL, '', 'Received', 'Y', 10, NULL),
(11, '05/08/2024', '04:13 PM', 'Developer', 'Interfolded', '150mm', 'PINT000002', 'Batch2', 'W3A1', 10, NULL, NULL, NULL, '', 'Received', 'N', 10, NULL),
(12, '05/08/2024', '04:23 PM', 'Developer', 'Interfolded', '150mm', 'PINT000002', 'Batch2', 'W3A1', NULL, NULL, NULL, 10, 'SODEXO', 'Shipped', 'Y', NULL, 10);

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
(5, 'Jumbo Roll', '120mm'),
(6, 'Interfolded', '150mm');

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
  `item_data_active` varchar(255) NOT NULL,
  `quantity_IN` int(11) DEFAULT NULL,
  `quantity_OUT` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rm_data`
--

INSERT INTO `rm_data` (`id`, `action_date`, `action_time`, `action_by`, `item_desc`, `item_id`, `item_lot`, `item_bin`, `quantity_receive`, `quantity_inProduction`, `quantity_scrap`, `quantity_used`, `fg_created_name`, `fg_created_desc`, `quantity_created_pcs`, `item_data_status`, `item_data_active`, `quantity_IN`, `quantity_OUT`) VALUES
(1, '05/08/2024', '03:31 PM', 'Developer', '150mm', 'ITX10100001K', 'Batch1', 'W1A1', 1000, NULL, NULL, NULL, '', '', NULL, 'Received', 'N', 1000, NULL),
(2, '05/08/2024', '03:31 PM', 'Developer', '150mm', 'ITX10100001K', 'Batch1', 'W1A1', NULL, 1000, NULL, NULL, '', '', NULL, 'InProduction', 'N', NULL, NULL),
(3, '05/08/2024', '03:31 PM', 'Developer', '150mm', 'ITX10100001K', 'Batch1', 'W1A1', NULL, 400, 100, 500, '', '', NULL, 'InProduction', 'N', NULL, 600),
(4, '05/08/2024', '03:31 PM', 'Developer', '150mm', 'ITX10100001K', 'Batch1', 'W1A1', NULL, NULL, NULL, NULL, 'Interfolded', '150mm', 1000, 'InUse', 'N', NULL, NULL),
(5, '05/09/2024', '08:12 AM', 'Developer', '150mm', 'ITX10100022K', 'Batch1', 'W1A3', 100000, NULL, NULL, NULL, '', '', NULL, 'Received', 'N', 100000, NULL),
(6, '05/09/2024', '08:36 AM', 'Developer', '150mm', 'ITX10100001K', 'Batch1', 'W1A1', NULL, 300, 0, 100, '', '', NULL, 'InProduction', 'N', NULL, 100),
(7, '05/09/2024', '08:36 AM', 'Developer', '150mm', 'ITX10100001K', 'Batch1', 'W1A1', NULL, NULL, NULL, NULL, 'Interfolded', '150mm', 200, 'InUse', 'N', NULL, NULL),
(8, '05/09/2024', '08:45 AM', 'Developer', '150mm', 'ITX10100001K', 'Batch1', 'W1A1', NULL, 0, 200, 100, '', '', NULL, 'InProduction', 'N', NULL, 300),
(9, '05/09/2024', '08:45 AM', 'Developer', '150mm', 'ITX10100001K', 'Batch1', 'W1A1', NULL, NULL, NULL, NULL, 'Interfolded', '150mm', 200, 'InUse', 'Y', NULL, NULL),
(10, '05/09/2024', '08:45 AM', 'Developer', '150mm', 'ITX10100001K', 'Batch1', 'W1A1', NULL, NULL, 300, 700, '', '', NULL, 'Depleted', 'Y', NULL, NULL),
(11, '05/09/2024', '08:57 AM', 'Developer', '150mm', 'ITX10100022K', 'Batch1', 'W1A3', NULL, 100000, NULL, NULL, '', '', NULL, 'InProduction', 'N', NULL, NULL),
(12, '05/09/2024', '09:12 AM', 'Developer', '150mm', 'ITX10100022K', 'Batch1', 'W1A3', NULL, 99700, 200, 100, '', '', NULL, 'InProduction', 'Y', NULL, 300),
(13, '05/09/2024', '09:12 AM', 'Developer', '150mm', 'ITX10100022K', 'Batch1', 'W1A3', NULL, NULL, NULL, NULL, 'Jumbo Roll', '120mm', 200, 'InUse', 'Y', NULL, NULL),
(14, '05/09/2024', '09:24 AM', 'Developer', '150mm', 'ITX10122001K', 'Batch2', 'W1A1', 1000, NULL, NULL, NULL, '', '', NULL, 'Received', 'Y', 1000, NULL);

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
(2, 'Admin2', 12312112, 'Admin'),
(4, 'Manager', 2147483647, 'Manager'),
(5, 'Checker', 12345678, 'Checker');

-- --------------------------------------------------------

--
-- Table structure for table `u_logged`
--

CREATE TABLE `u_logged` (
  `id` int(11) NOT NULL,
  `login_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `u_logged`
--

INSERT INTO `u_logged` (`id`, `login_type`) VALUES
(1, 'none');

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
-- Indexes for table `u_logged`
--
ALTER TABLE `u_logged`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `fg_registered`
--
ALTER TABLE `fg_registered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products_data`
--
ALTER TABLE `products_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `products_registered`
--
ALTER TABLE `products_registered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `rm_adj_data`
--
ALTER TABLE `rm_adj_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `rm_data`
--
ALTER TABLE `rm_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `rm_registered`
--
ALTER TABLE `rm_registered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `u_logged`
--
ALTER TABLE `u_logged`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
