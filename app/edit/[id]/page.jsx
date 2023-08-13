import Form from "@/app/components/Form"
import Students from "@/app/database/models/Students";

const page = async({params}) => {
    let {id} = params;
    let callingRecordForUpdate = await Students.findById(id);
  return (
    <div className='flex justify-center'>
        <div className='w-1/2 mt-4'>
            <div className='flex-1'>
                <h1 className='text-2xl font-bold capitalize mb-3'>Update {callingRecordForUpdate.name}'s Student Record</h1>
            </div>
            <div className='border shadow-xl p-5 rounded-lg'>
                <Form update={true} data={callingRecordForUpdate}/>
            </div>
        </div>
    </div>
  )
}

export default page