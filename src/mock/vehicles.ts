import { Vehicle } from "../model/vehicle";

const vehicles: Vehicle[] = [];

export const columns = [
  { accessor: 'licensePlate', secondary_accessor:'vin', label: 'Name' },
  { accessor: 'model', secondary_accessor:'year', label: 'Model' },
  { accessor: 'status', secondary_accessor:'', label: 'Status' },
  { accessor: 'driver', secondary_accessor:'', label: 'Driver' },
  { accessor: '', label: 'action' },
]

export const issues = [
  {issueId:'1',issueDescription:'Brakes loose',issueLevel:'CRITICAL', actionRequired:'Technician Appointment',status:'unresolved'},
  {issueId:'2',issueDescription:'Dent on front',issueLevel:'MEDIUM', actionRequired:'Notify Driver', status:'unresolved'},
  {issueId:'3',issueDescription:'Paint worn off',issueLevel:'LOW',actionRequired:'Painter Appointment',status:'resolved'},
]

export const issueColumns = [
  { accessor: 'issueId',  label: 'ID' },
  { accessor: 'issueDescription', label: 'Description' },
  { accessor: 'issueLevel', spanColor:'color', label: 'Level' },
  { accessor: 'actionRequired', label: 'Action' },
  { accessor: 'status', spanColor:'color', label: 'Status' },
  { accessor: '', label: '' },
]

export const getIssues = () => issues;
export const getVehicles = () => vehicles;
export const getVehicle = (id: number) => vehicles.find((v) => v.id === id);
