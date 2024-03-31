-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2024 at 06:18 PM
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
(26, '31/03/2024', '10:04 PM', 'Developer', 'RawMat0', 'Testing0123', 'T000', 'Batch1', 'Pallet0', 1, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(28, '31/03/2024', '10:19 PM', 'Developer', 'RawMat0', 'Testing0123', 'T000', 'Batch1', 'Pallet0', NULL, 1, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(29, '31/03/2024', '10:24 PM', 'Developer', 'RawMat1', 'GSM2000mm', 'T000', 'Batch1', 'Pallet0', 1, NULL, NULL, NULL, NULL, NULL, 'Received', 'N'),
(30, '31/03/2024', '10:25 PM', 'Developer', 'RawMat1', 'GSM2000mm', 'T000', 'Batch1', 'Pallet0', NULL, 1, NULL, NULL, NULL, NULL, 'InProduction', 'Y'),
(31, '31/03/2024', '10:49 PM', 'Developer', 'test', 'test12', 'test121', 'Batch1', 'testPallet1', 1111, NULL, NULL, NULL, NULL, NULL, 'Received', 'Y');

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
(1, 'RawMat0', 'Testing0123'),
(2, 'RawMat1', 'GSM2000mm'),
(3, 'test', 'test12');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `rm_data`
--
ALTER TABLE `rm_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `rm_registered`
--
ALTER TABLE `rm_registered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
