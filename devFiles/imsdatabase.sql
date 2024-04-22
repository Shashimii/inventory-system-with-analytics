-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2024 at 02:34 PM
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
(97, '04/22/2024', '04:04 PM', 'Developer', 'JRT', '120mm', 'Batch1', 'Pallet1', 'RawMat1', 'sadas5467', 100, NULL, NULL, NULL, 'Received', 'Y'),
(98, '04/22/2024', '04:04 PM', 'Developer', 'JRT', '120mm', 'Batch1', 'Pallet1', 'RawMat1', 'sadas5467', 100, NULL, NULL, NULL, 'Float', 'Y'),
(99, '04/22/2024', '04:04 PM', 'Developer', 'IRT', '150mm', 'Batch1', 'Pallet2', 'RawMat1', '231', 1000, NULL, NULL, NULL, 'Received', 'Y'),
(100, '04/22/2024', '04:04 PM', 'Developer', 'IRT', '150mm', 'Batch1', 'Pallet2', 'RawMat1', '231', 940, NULL, NULL, NULL, 'Float', 'Y'),
(101, '04/22/2024', '04:05 PM', 'Developer', 'IRT', '150mm', 'Batch2', 'Pallet3', 'RawMat0', 'asd1321', 500, NULL, NULL, NULL, 'Received', 'Y'),
(102, '04/22/2024', '04:05 PM', 'Developer', 'IRT', '150mm', 'Batch2', 'Pallet3', 'RawMat0', 'asd1321', 464, NULL, NULL, NULL, 'Float', 'Y'),
(103, '04/22/2024', '04:09 PM', 'Developer', 'IRT', '150mm', 'Batch1', 'Pallet2', 'RawMat1', '231', 993, 7, NULL, NULL, 'InUse', 'Y'),
(104, '04/22/2024', '04:09 PM', 'Developer', 'IRT', '150mm', 'Batch2', 'Pallet3', 'RawMat0', 'asd1321', 491, 9, NULL, NULL, 'InUse', 'Y'),
(105, '04/22/2024', '04:11 PM', 'Developer', 'IRT', '150mm', 'Batch1', 'Pallet2', 'RawMat1', '231', 974, NULL, 19, NULL, 'InUse', 'Y'),
(106, '04/22/2024', '04:11 PM', 'Developer', 'IRT', '150mm', 'Batch2', 'Pallet3', 'RawMat0', 'asd1321', 486, NULL, 5, NULL, 'InUse', 'Y'),
(107, '04/22/2024', '04:14 PM', 'Developer', 'IRT', '150mm', 'Batch1', 'Pallet2', 'RawMat1', '231', 955, NULL, 19, NULL, 'InUse', 'Y'),
(108, '04/22/2024', '04:14 PM', 'Developer', 'IRT', '150mm', 'Batch2', 'Pallet3', 'RawMat0', 'asd1321', 481, NULL, 5, NULL, 'InUse', 'Y'),
(109, '04/22/2024', '04:15 PM', 'Developer', 'IRT', '150mm', 'Batch2', 'Pallet3', 'RawMat0', 'asd1321', 463, NULL, NULL, 18, 'InUse', 'Y'),
(110, '04/22/2024', '04:15 PM', 'Developer', 'IRT', '150mm', 'Batch1', 'Pallet2', 'RawMat1', '231', 941, NULL, NULL, 14, 'InUse', 'Y'),
(111, '04/22/2024', '04:22 PM', 'Developer', 'IRT', '150mm', 'Batch1', 'Pallet2', 'RawMat1', '231', 940, NULL, NULL, 15, 'InUse', 'Y'),
(112, '04/22/2024', '04:22 PM', 'Developer', 'IRT', '150mm', 'Batch2', 'Pallet3', 'RawMat0', 'asd1321', 464, NULL, NULL, 17, 'InUse', 'Y'),
(113, '04/22/2024', '04:29 PM', 'Developer', 'IRT', '150mm', 'Batch2', 'Pallet3', 'RawMat0', 'asd1321', 464, NULL, NULL, 17, 'InUse', 'Y'),
(114, '04/22/2024', '04:29 PM', 'Developer', 'IRT', '150mm', 'Batch1', 'Pallet2', 'RawMat1', '231', 940, NULL, NULL, 15, 'InUse', 'Y');

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
(1, 'IRT', '150mm'),
(2, 'JRT', '120mm');

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
  `item_data_status` varchar(255) NOT NULL,
  `item_data_active` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products_data`
--

INSERT INTO `products_data` (`id`, `action_date`, `action_time`, `action_by`, `item_name`, `item_desc`, `item_id`, `item_lot`, `item_bin`, `pack_small`, `pack_medium`, `pack_large`, `item_data_status`, `item_data_active`) VALUES
(7, '04/22/2024', '04:09 PM', 'Developer', 'Interfolded', '150mm', 'IRT15010101K', 'Batch1', 'Pallet1', 16, NULL, NULL, 'Received', 'Y'),
(8, '04/22/2024', '04:14 PM', 'Developer', 'Interfolded', '150mm', 'IRT15010102K', 'Batch2', 'Pallet2', NULL, 24, NULL, 'Received', 'Y'),
(9, '04/22/2024', '04:15 PM', 'Developer', 'Interfolded', '150mm', 'IRT15010103K', 'Batch3', 'Pallet3', NULL, NULL, 32, 'Received', 'Y'),
(10, '04/22/2024', '04:22 PM', 'Developer', 'Interfolded', '150mm', 'IRT15010105K', 'Batch4', 'Pallet1', NULL, NULL, 32, 'Received', 'Y'),
(11, '04/22/2024', '04:29 PM', 'Developer', 'Interfolded', '150mm', 'IRT15010121K', 'Batch5', 'Pallet1', NULL, NULL, 32, 'Received', 'Y');

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
(1, '08/04/2024', '07:12 PM', 'Developer', 'RawMat0', 'Test0', 'BT11112222223333331A', 'Batch1', 'P1', 1250, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(2, '08/04/2024', '07:13 PM', 'Developer', 'RawMat0', 'Test0', 'BT11112222223333332A', 'Batch2', 'P2', 1350, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(3, '08/04/2024', '07:14 PM', 'Developer', 'RawMat1', 'Test1', 'BT11112222223333331A', 'Batch1', 'P3', 1000, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(4, '08/04/2024', '08:12 PM', 'Developer', 'RawMat0', 'Test0', 'BT11112222223333331A', 'Batch1', 'P1', NULL, 1250, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(5, '08/04/2024', '08:12 PM', 'Developer', 'RawMat0', 'Test0', 'BT11112222223333332A', 'Batch2', 'P2', NULL, 1350, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(6, '08/04/2024', '08:13 PM', 'Developer', 'RawMat1', 'Test1', 'BT11112222223333331A', 'Batch1', 'P3', NULL, 1000, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(7, '08/04/2024', '08:13 PM', 'Developer', 'RawMat0', 'Test0', 'BT11112222223333331A', 'Batch1', 'P1', NULL, NULL, 250, 1000, '', '', NULL, 'Depleted', 'N'),
(8, '08/04/2024', '08:14 PM', 'Developer', 'RawMat1', 'Test1', 'BT11112222223333331A', 'Batch1', 'P3', NULL, NULL, 200, 800, '', '', NULL, 'Depleted', 'N'),
(9, '08/04/2024', '08:27 PM', 'Developer', 'RawMat1', 'Test1', 'ZYX494505ZYX23255773', 'Batch2', 'Pallet10', 1277, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(23, '09/04/2024', '02:23 PM', 'Developer', 'RawMat0', 'Test0', 'BT11112222223333331O', 'Batch1', 'P1', 1245, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(27, '09/04/2024', '03:14 PM', 'Developer', 'RawMat0', 'Test0', 'asd1321', 'Batch2', 'sad121', 1234, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(28, '09/04/2024', '03:15 PM', 'Developer', 'RawMat0', 'Test0', 'pop213', 'Batch3', 'p213', 1321, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(31, '09/04/2024', '03:44 PM', 'Developer', 'RawMat1', 'Test1', '231', 'Batch1', '12321', 12312, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(37, '09/04/2024', '04:13 PM', 'Developer', 'RawMat0', 'Test0', 'BT11112222223333332A', 'Batch2', 'P2', NULL, NULL, 1321, 29, '', '', 12321, 'Depleted', 'N'),
(49, '09/04/2024', '05:47 PM', 'Developer', 'RawMat1', 'Test1', 'ZYX494505ZYX23255773', 'Batch2', 'Pallet10', NULL, 1277, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(50, '09/04/2024', '07:09 PM', 'Developer', 'RawMat1', 'Test1', '1231', 'Batch3', '2131', 2131, NULL, NULL, NULL, '', '', NULL, 'Received', 'Y'),
(51, '09/04/2024', '07:09 PM', 'Developer', 'RawMat3', 'Test3', '1321', 'Batch1', '1231', 21312, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(52, '09/04/2024', '07:09 PM', 'Developer', 'RawMat1', 'Test1', '1321asdsa', 'Batch4', '123as', 12123, NULL, NULL, NULL, '', '', NULL, 'Received', 'Y'),
(55, '09/04/2024', '07:10 PM', 'Developer', 'RawMat1', 'Test1', 'sadas5467', 'Batch6', '123sa', 21, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(56, '09/04/2024', '07:10 PM', 'Developer', 'RawMat1', 'Test1', 'asdjf3412', 'Batch7', '325fd', 123, NULL, NULL, NULL, '', '', NULL, 'Received', 'N'),
(60, '10/04/2024', '09:16 PM', 'Developer', 'RawMat0', 'Test0', 'pop213', 'Batch3', 'p213', NULL, 1321, NULL, NULL, '', '', NULL, 'InProduction', 'Y'),
(61, '10/04/2024', '09:17 PM', 'Developer', 'RawMat3', 'Test3', '1321', 'Batch1', '1231', NULL, 21312, NULL, NULL, '', '', NULL, 'InProduction', 'Y'),
(62, '11/04/2024', '01:33 PM', 'Developer', 'RawMat1', 'Test1', 'ZYX494505ZYX23255773', 'Batch2', 'Pallet10', NULL, NULL, 1111, 166, '', '', NULL, 'Depleted', 'N'),
(63, '11/04/2024', '03:01 PM', 'Developer', 'RawMat1', 'Test1', 'asdjf3412', 'Batch7', '325fd', NULL, 123, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(64, '11/04/2024', '03:01 PM', 'Developer', 'RawMat1', 'Test1', 'asdjf3412', 'Batch7', '325fd', NULL, NULL, 12, 111, '', '', 1231, 'Depleted', 'N'),
(67, '11/04/2024', '04:52 PM', 'Developer', 'RawMat0', 'Test0', 'BT11112222223333331O', 'Batch1', 'P1', NULL, 1245, NULL, NULL, '', '', NULL, 'InProduction', 'Y'),
(75, '13/04/2024', '12:24 PM', 'Developer', 'RawMat1', 'Test1', '1231asd', 'Batch1', '21321', 12321, NULL, NULL, NULL, '', '', NULL, 'Received', 'Y'),
(76, '13/04/2024', '12:24 PM', 'Developer', 'RawMat0', 'Test0', 'asd1321', 'Batch2', 'sad121', NULL, 1234, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(77, '13/04/2024', '12:24 PM', 'Developer', 'RawMat1', 'Test1', '231', 'Batch1', '12321', NULL, 12312, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(80, '13/04/2024', '12:26 PM', 'Developer', 'RawMat1', 'Test1', 'sadas5467', 'Batch6', '123sa', NULL, 21, NULL, NULL, '', '', NULL, 'InProduction', 'N'),
(103, '04/22/2024', '04:04 PM', 'Developer', 'RawMat1', 'Test1', 'sadas5467', 'Batch6', '123sa', NULL, NULL, 2, 19, 'JRT', '120mm', 100, 'Depleted', 'Y'),
(104, '04/22/2024', '04:04 PM', 'Developer', 'RawMat1', 'Test1', '231', 'Batch1', '12321', NULL, NULL, 2312, 10000, 'IRT', '150mm', 1000, 'Depleted', 'Y'),
(105, '04/22/2024', '04:05 PM', 'Developer', 'RawMat0', 'Test0', 'asd1321', 'Batch2', 'sad121', NULL, NULL, 200, 1034, 'IRT', '150mm', 500, 'Depleted', 'Y');

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
(4, 'papap', 'paap'),
(5, 'asdsa', 'sada'),
(6, '12', '12'),
(7, '11', '11');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fg_data`
--
ALTER TABLE `fg_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `fg_registered`
--
ALTER TABLE `fg_registered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products_data`
--
ALTER TABLE `products_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `rm_adj_data`
--
ALTER TABLE `rm_adj_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `rm_data`
--
ALTER TABLE `rm_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `rm_registered`
--
ALTER TABLE `rm_registered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
