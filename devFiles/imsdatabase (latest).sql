-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2024 at 04:44 PM
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
  `quantity_created_ply` int(11) DEFAULT NULL,
  `quantity_created_pcs` int(11) DEFAULT NULL,
  `item_data_status` varchar(255) NOT NULL,
  `item_data_active` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rm_data`
--

INSERT INTO `rm_data` (`id`, `action_date`, `action_time`, `action_by`, `item_name`, `item_desc`, `item_id`, `item_lot`, `item_bin`, `quantity_receive`, `quantity_inProduction`, `quantity_scrap`, `quantity_used`, `quantity_created_ply`, `quantity_created_pcs`, `item_data_status`, `item_data_active`) VALUES
(16, '01/04/2024', '11:17 AM', 'Developer', 'RawMat0', 'Test0', 'Test0', 'Batch1', 'Pallet0', 1, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(17, '01/04/2024', '11:18 AM', 'Developer', 'RawMat0', 'Test0', 'Test0', 'Batch1', 'Pallet0', NULL, 1, NULL, NULL, NULL, NULL, 'InProduction', 'N'),
(18, '01/04/2024', '11:20 AM', 'Developer', 'RawMat0', 'Test0', 'Test1', 'Batch2', 'Pallet1', 3, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(19, '01/04/2024', '11:21 AM', 'Developer', 'RawMat0', 'Test0', 'Test2', 'Batch3', 'Pallet2', 10, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(20, '01/04/2024', '11:24 AM', 'Developer', 'RawMat1', 'Test1', 'Test09', 'Batch1', 'Pallet05', 100, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(21, '01/04/2024', '11:25 AM', 'Developer', 'RawMat3', 'Test3', 'Test07', 'Batch1', 'Pallet08', 1000, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(22, '01/04/2024', '11:26 AM', 'Developer', 'RawMat3', 'Test3', 'Test101', 'Batch2', 'Pallet6', 1000, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(23, '01/04/2024', '11:26 AM', 'Developer', 'RawMat0', 'Test0', 'Test121', 'Batch4', 'Pallet767', 1100, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(24, '01/04/2024', '11:27 AM', 'Developer', 'RawMat3', 'Test3', 'Test989', 'Batch3', 'Pallet868', 1250, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(25, '01/04/2024', '11:27 AM', 'Developer', 'RawMat0', 'Test0', 'Test010', 'Batch5', 'Pallet007', 1, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(26, '01/04/2024', '11:28 AM', 'Developer', 'RawMat0', 'Test0', 'Test774', 'Batch6', 'Pallet778', 1010, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(27, '01/04/2024', '11:28 AM', 'Developer', 'RawMat1', 'Test1', 'Test62', 'Batch2', 'Pallet78', 770, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(28, '01/04/2024', '11:29 AM', 'Developer', 'RawMat0', 'Test0', 'Test771', 'Batch7', 'Pallet734', 1211, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(29, '01/04/2024', '12:58 AM', 'Developer', 'RawMat0', 'Test0', 'Test1', 'Batch2', 'Pallet1', NULL, 3, NULL, NULL, NULL, NULL, 'InProduction', 'N'),
(30, '01/04/2024', '11:27 AM', 'Developer', 'RawMat3', 'Test3', 'Test989', 'Batch3', 'Pallet868', 1250, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(31, '01/04/2024', '11:27 AM', 'Developer', 'RawMat0', 'Test0', 'Test010', 'Batch5', 'Pallet007', 1, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(32, '01/04/2024', '11:28 AM', 'Developer', 'RawMat0', 'Test0', 'Test774', 'Batch6', 'Pallet778', 1010, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(33, '01/04/2024', '11:28 AM', 'Developer', 'RawMat1', 'Test1', 'Test62', 'Batch2', 'Pallet78', 770, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(34, '01/04/2024', '11:29 AM', 'Developer', 'RawMat0', 'Test0', 'Test771', 'Batch7', 'Pallet734', 1211, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(35, '05/04/2024', '09:48 PM', 'Developer', 'RawMat0', 'Test0', 'Test771', 'Batch7', 'Pallet734', NULL, 1211, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(36, '05/04/2024', '09:48 PM', 'Developer', 'RawMat1', 'Test1', 'Test62', 'Batch2', 'Pallet78', NULL, 770, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(37, '06/04/2024', '09:04 AM', 'Developer', 'RawMat0', 'Test0', 'Test774', 'Batch6', 'Pallet778', NULL, 1010, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(38, '06/04/2024', '09:07 AM', 'Developer', 'RawMat0', 'Test0', 'Test991', 'Batch7', 'Pallet991', 1111, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(39, '06/04/2024', '09:09 AM', 'Developer', 'RawMat0', 'Test0', '12', 'Batch8', '21312', 12321, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(40, '06/04/2024', '09:13 AM', 'Developer', 'RawMat1', 'Test1', 'asdsad', 'Batch1', 'asdsad', 1123, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(41, '06/04/2024', '09:14 AM', 'Developer', 'RawMat0', 'Test0', '12312', 'Batch9', '213', 121, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(42, '06/04/2024', '09:21 AM', 'Developer', 'RawMat1', 'Test1', '111', 'Batch2', '111', 111, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(43, '06/04/2024', '11:10 AM', 'Developer', 'RawMat0', 'Test0', 'Test991', 'Batch7', 'Pallet991', NULL, 1111, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(44, '06/04/2024', '11:10 AM', 'Developer', 'RawMat0', 'Test0', 'Test010', 'Batch5', 'Pallet007', NULL, 1, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(45, '06/04/2024', '11:10 AM', 'Developer', 'RawMat0', 'Test0', '12312', 'Batch9', '213', NULL, 121, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(46, '06/04/2024', '11:10 AM', 'Developer', 'RawMat1', 'Test1', '111', 'Batch2', '111', NULL, 111, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(47, '06/04/2024', '11:10 AM', 'Developer', 'RawMat0', 'Test0', '12', 'Batch8', '21312', NULL, 12321, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(48, '06/04/2024', '11:10 AM', 'Developer', 'RawMat1', 'Test1', 'asdsad', 'Batch1', 'asdsad', NULL, 1123, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(49, '01/04/2024', '11:24 AM', 'Developer', 'RawMat1', 'Test1', 'Test09', 'Batch1', 'Pallet05', 100, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(50, '01/04/2024', '11:25 AM', 'Developer', 'RawMat3', 'Test3', 'Test07', 'Batch1', 'Pallet08', 1000, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(51, '01/04/2024', '11:26 AM', 'Developer', 'RawMat3', 'Test3', 'Test101', 'Batch2', 'Pallet6', 1000, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(52, '01/04/2024', '11:26 AM', 'Developer', 'RawMat0', 'Test0', 'Test121', 'Batch4', 'Pallet767', 1100, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(53, '01/04/2024', '11:27 AM', 'Developer', 'RawMat3', 'Test3', 'Test989', 'Batch3', 'Pallet868', 1250, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(54, '06/04/2024', '12:57 PM', 'Developer', 'RawMat0', 'Test0', 'Test0', 'Batch1', 'Pallet0', NULL, NULL, 1, 0, 1, NULL, 'Depleted', 'Y'),
(55, '06/04/2024', '01:10 PM', 'Developer', 'RawMat0', 'Test0', 'Test1', 'Batch2', 'Pallet1', NULL, NULL, 2, 1, NULL, 100, 'Depleted', 'N'),
(56, '06/04/2024', '01:14 PM', 'Developer', 'RawMat3', 'Test3', 'Test101', 'Batch2', 'Pallet6', NULL, 1000, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(57, '06/04/2024', '01:14 PM', 'Developer', 'RawMat3', 'Test3', 'Test989', 'Batch3', 'Pallet868', NULL, 1250, NULL, NULL, NULL, NULL, 'InProduction', 'Y');

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
-- AUTO_INCREMENT for table `rm_adj_data`
--
ALTER TABLE `rm_adj_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `rm_data`
--
ALTER TABLE `rm_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `rm_registered`
--
ALTER TABLE `rm_registered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
