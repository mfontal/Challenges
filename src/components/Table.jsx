import React from 'react'

export default function Table({reserves}) {
  return (
    <table>
        <th>
            <td>Nombre</td>
            <td>Fila</td>
            <td>Asiento</td>
        </th>
        {
            reserves && reserves.map((reserve, idx) => 
                <tr key={idx}>
                    <td>{reserve.name}</td>
                    <td>{reserve.row}</td>
                    <td>{reserve.seat}</td>
                </tr>
            )
        }
    </table>
  )
}
