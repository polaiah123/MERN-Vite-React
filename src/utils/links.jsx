
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FaAmazon } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaEbay } from "react-icons/fa";
import { MdPermMedia } from "react-icons/md";

const links = [
    {
        text: 'add job',
        path: '.',
        icon: <FaWpforms />,
      },
      {
        text: 'all jobs',
        path: 'all-jobs',
        icon: <MdQueryStats />,
      },
    {
        text: 'stats',
        path: 'stats',
        icon: <IoBarChartSharp />,
      },
      {
        text: 'profile',
        path: 'profile',
        icon: <ImProfile />,
      },
      {
        text: 'admin',
        path: 'admin',
        icon: <MdAdminPanelSettings />,
      },
      {
        text: 'amazon',
        path: 'amazon',
        icon: <FaAmazon />,
      },
      {
        text: 'bookmark',
        path: 'bookmark',
        icon: <FaBookmark />,
      },
      {
        text: 'ebay',
        path: 'ebay',
        icon: <FaEbay />,
      },
      {
        text: 'media',
        path: 'media',
        icon: <MdPermMedia />,
      },

];

export default links;