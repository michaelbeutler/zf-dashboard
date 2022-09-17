import { Vehicle } from "../model/vehicle";

const vehicles: Vehicle[] = [];
// const vehicles: Vehicle[] = [
//   ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => ({
//     id: i + 1,
//     name: "Ford",
//     model: 150,
//     license_number: "ABC123",
//     driver_name: "Darshan",
//     image: "xyz"
//   })),
// ];

export const columns = [
  { accessor: 'license_number', secondary_accessor:'id', label: 'Name' },
  { accessor: 'name', secondary_accessor:'model', label: 'Model' },
  { accessor: 'status', secondary_accessor:'', label: 'Status' },
  { accessor: 'driver_name', secondary_accessor:'', label: 'Driver' },
  { accessor: '', label: 'Details' },
]

export const issues = [
  {issueId:'1',issueDescription:'Brakes loose',issueLevel:'CRITICAL', actionRequired:'Technician Appointment',status:'unresolved', statusClass:'inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800', levelClass:'inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800'},
  {issueId:'2',issueDescription:'Dent on front',issueLevel:'MEDIUM', actionRequired:'Notify Driver', status:'unresolved',  statusClass:'inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800', levelClass:'inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800'},
  {issueId:'3',issueDescription:'Paint worn off',issueLevel:'LOW',actionRequired:'Painter Appointment',status:'resolved',  statusClass:'inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800', levelClass:'inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'},
]

export const issueColumns = [
  { accessor: 'issueId',  label: 'Issue ID' },
  { accessor: 'issueDescription', label: 'Description' },
  { accessor: 'issueLevel', spanColor:'color', label: 'Level' },
  { accessor: 'actionRequired', label: 'Action' },
  { accessor: 'status', spanColor:'color', label: 'Status' },
  { accessor: '', label: '' },
]

export const getIssues = () => issues;
export const getVehicles = () => vehicles;
export const getVehicle = (id: number) => vehicles.find((v) => v.id === id);
