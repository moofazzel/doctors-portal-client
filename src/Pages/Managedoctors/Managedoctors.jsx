import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Managedoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = res.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  // click handler for inside modal for delete confirmation
  const closeModal = () => {
    setDeleteDoctor(null);
  };

  //  button for delete doctor
  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          toast.success(`Doctor ${doctor.name} deleted Successfully`);
        }
      });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2 className="text2xl font-bold">Manage Doctors: {doctors.length} </h2>
      <div className="overflow-x-auto w-full mt-7">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th> Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <>
                {/* <!-- row 1 --> */}
                <tr key={doctor._id}>
                  <th> {i + 1} </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                          <img src={doctor.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{doctor.name} </div>
                    </div>
                  </td>
                  <td>{doctor.specialty} </td>
                  <th>
                    <label
                      onClick={() => setDeleteDoctor(doctor)}
                      htmlFor="confirm-modal"
                      className="btn btn-error btn-xs"
                    >
                      Delete
                    </label>
                  </th>
                  {/* The button to open modal */}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ConfirmModal
          title={"Are you sure you want to delete ?"}
          message={`If you delete ${deleteDoctor.name} it won't be recover`}
          successAction={handleDeleteDoctor}
          modalData={deleteDoctor}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Managedoctors;
