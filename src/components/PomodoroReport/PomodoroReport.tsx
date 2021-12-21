import React from 'react';

//import { Document, Page, View, Text } from '@react-pdf/renderer';
import Task from '../../models/Task';

import styles from './PomodoroReportStyles';

interface ICPomodoroReport {
  user: string;
  tasks: Array<Task>;
  hoursWorked: number;
  hoursRested: number;
}
  
// const formatSeconds = (s : number) => {
//   const m = Math.floor(s % 3600 / 60).toString().padStart(2,'0');
//   const ss = Math.floor(s % 60).toString().padStart(2,'0');
//   return m + ':' + ss;
// }

const PomodoroReport = () => (
  <>
  </>
  // <Document>
  // </Document >
);

export default PomodoroReport;