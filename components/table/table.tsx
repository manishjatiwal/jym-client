import React from 'react';

type tableProps = {
  headers: any[];
  data: any[];
};

export default function Table({ headers, data }: tableProps) {
  return (
    <div className="container-xxl">
      <div className="card">
        <div className="card-header border-0 pt-6">
          <div className="card-title">
            <div className="d-flex align-items-center position-relative my-1">
              <span className="svg-icon svg-icon-1 position-absolute ms-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"></rect>
                  <path
                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                    fill="black"
                  ></path>
                </svg>
              </span>

              <input type="text" data-kt-customer-table-filter="search" className="form-control form-control-solid w-250px ps-15" placeholder="Search Customers" />
            </div>
          </div>
          <div className="card-toolbar">
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary">Add New Member</button>
            </div>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="dataTables_wrapper dt-bootstrap4 no-footer">
            <div className="table-responsive">
              <table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                <thead>
                  <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                    {headers.map((header, index) => (
                      <th key={index} className={`min-w-125px sorting ${index === headers.length - 1 ? 'text-end' : ''}`}>
                        {header.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="fw-bold text-gray-600">
                  {data.map((member, memberIndex) => (
                    <tr key={memberIndex}>
                      <td>
                        <div className="text-gray-800 text-hover-primary mb-1">{member.name}</div>
                      </td>
                      <td>
                        <div className="text-gray-600 text-hover-primary mb-1">{member.email}</div>
                      </td>
                      <td>
                        <div className="text-gray-600 text-hover-primary mb-1">{member.phone || '-'}</div>
                      </td>
                      <td>
                        <div className="text-gray-600 text-hover-primary mb-1">{new Date(member.doj).toDateString()}</div>
                      </td>
                      <td>
                        <span className="badge badge-light-success fw-bolder px-4 py-3">{member.status}</span>
                      </td>
                      <td className="text-end">
                        <div className="btn btn-sm btn-light btn-active-light-primary">View</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
