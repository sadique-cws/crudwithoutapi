import { addStudent, updateStudent } from "../actions";

const Form = ({update,data}) => {
  return (
        <div className="flex-1">
            <form action={(update)? updateStudent : addStudent} method="post">
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" defaultValue={data?.name} name="name" placeholder="Enter name here" className="border px-5 py-3 w-full" />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact">contact</label>
                    <input type="text" id="contact" defaultValue={data?.contact} name="contact" placeholder="Enter contact here" className="border px-5 py-3 w-full" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" defaultValue={data?.email} name="email" placeholder="Enter email here" className="border px-5 py-3 w-full" />
                </div>
                <div className="mb-3">
                    <label htmlFor="city">city</label>
                    <input type="text" id="city" name="city" defaultValue={data?.city} placeholder="Enter city here" className="border px-5 py-3 w-full" />
                </div>
                <div className="mb-3">
                    {
                        update && <input type="hidden" name="id" defaultValue={data._id}/>
                    }
                    <button type="submit" className="bg-teal-700 hover:bg-teal-800 text-white px-3 py-3 w-full rounded">{update ? "Update" : "Create"} record</button>
                </div>
            </form>
        </div>
  )
}

export default Form