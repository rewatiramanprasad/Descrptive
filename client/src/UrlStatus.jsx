import React from 'react'
import Table from '@mui/joy/Table'

function UrlStatus({ data }) {
  return (
    <div className=" w-1/2 ">
      <Table size="lg" variant="plain">
        <thead>
          <tr>
            <th className="w-xl text-3xl font-bold">URL/IP</th>
            <th className=" text-3xl font-bold capitalize">status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            let malicious = row.status === 'malicious' ? 'text-red-500 ' : ''
            return (
              <tr className={malicious} key={index}>
                <td className=" w-xl  text-2xl">{row.url}</td>
                <td className="text-2xl font-bold capitalize">{row.status}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default UrlStatus
