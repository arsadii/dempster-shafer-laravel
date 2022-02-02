import React from 'react'
import { useRecoilState } from 'recoil';
import { editAdmin, lihatAdmin, modaladmin } from '../store';

export default function DataAdminTable({dataadmin, from}) {
    const [showModal, setShowModal]= useRecoilState(modaladmin);
    const [showDetail,setShowDetail]= useRecoilState(lihatAdmin);
    const[dataEditAdmin, setDataEditAdmin] = useRecoilState(editAdmin);
  
    const hapus = (id) =>{
      let formData = new FormData;
      formData.append('id', id)
  
      swal({
        title: "Apakah anda yakin ingin menghapus?",
        text: "Data yang telah dipahus tidak dapat dikembalikan!",
        icon: "warning", 
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          Inertia.post('/hapusadmin', formData);
        } else {
          swal("Data Aman");
        }
      });
     
    }
        
      return (
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          No. 
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Nama
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Username
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Email
                        </th>
                       
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dataadmin?.map((admin, key) => (
                        <tr key={key}>
                          <td className="px-6 py-4 whitespace-nowrap">
                           {from + key}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                {/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{admin.username}</div>
                               
                              </div>
                            </div>
                          </td>
                          
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.password}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-left space-x-3 text-sm font-medium">
                          <button onClick={()=> {
                              setDataEditAdmin(admin)
                              setShowModal(true);
                            }} className=" rounded-full px-3 py-1 bg-green-500 text-white font-bold hover:bg-green-400 transition-all duration-300">
                              Ubah
                            </button>
                            <button onClick={()=> {
                              hapus(admin.id); 
                            }} className=" rounded-full px-3 py-1 bg-red-500 text-white font-bold hover:bg-red-400 transition-all duration-300">
                              Hapus
                            </button>
                           
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )
      }