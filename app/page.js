import Table from './components/Table'
import Connect from './database/Connect'
import Students from './database/models/Students';
export default async function Home () {

  await Connect();
  let callingStudent = await Students.find({});

  return (<Table data={callingStudent}/>)
}
