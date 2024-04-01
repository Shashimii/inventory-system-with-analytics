-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2024 at 10:52 AM
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
(6, '01/04/2024', '12:59 AM', 'Developer', 'RawMat0', 'Test2', 1, 3, 0, 0, 0, 0);

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
(17, '01/04/2024', '11:18 AM', 'Developer', 'RawMat0', 'Test0', 'Test0', 'Batch1', 'Pallet0', NULL, 1, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(18, '01/04/2024', '11:20 AM', 'Developer', 'RawMat0', 'Test0', 'Test1', 'Batch2', 'Pallet1', 3, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(19, '01/04/2024', '11:21 AM', 'Developer', 'RawMat0', 'Test0', 'Test2', 'Batch3', 'Pallet2', 3, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(20, '01/04/2024', '11:24 AM', 'Developer', 'RawMat1', 'Test1', 'Test09', 'Batch1', 'Pallet05', 100, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(21, '01/04/2024', '11:25 AM', 'Developer', 'RawMat3', 'Test3', 'Test07', 'Batch1', 'Pallet08', 1000, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(22, '01/04/2024', '11:26 AM', 'Developer', 'RawMat3', 'Test3', 'Test101', 'Batch2', 'Pallet6', 1000, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(23, '01/04/2024', '11:26 AM', 'Developer', 'RawMat0', 'Test0', 'Test121', 'Batch4', 'Pallet767', 1100, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(24, '01/04/2024', '11:27 AM', 'Developer', 'RawMat3', 'Test3', 'Test989', 'Batch3', 'Pallet868', 1250, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(25, '01/04/2024', '11:27 AM', 'Developer', 'RawMat0', 'Test0', 'Test010', 'Batch5', 'Pallet007', 1070, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(26, '01/04/2024', '11:28 AM', 'Developer', 'RawMat0', 'Test0', 'Test774', 'Batch6', 'Pallet778', 1010, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(27, '01/04/2024', '11:28 AM', 'Developer', 'RawMat1', 'Test1', 'Test62', 'Batch2', 'Pallet78', 770, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(28, '01/04/2024', '11:29 AM', 'Developer', 'RawMat0', 'Test0', 'Test771', 'Batch7', 'Pallet734', 1211, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y'),
(29, '01/04/2024', '12:58 AM', 'Developer', 'RawMat0', 'Test0', 'Test1', 'Batch2', 'Pallet1', NULL, 3, NULL, NULL, NULL, NULL, 'InProduction', 'Y');

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
(3, 'RawMat3', 'Test3');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `rm_data`
--
ALTER TABLE `rm_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `rm_registered`
--
ALTER TABLE `rm_registered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
