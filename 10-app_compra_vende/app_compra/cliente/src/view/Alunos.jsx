//@flow
import React from 'react'

function BuscaAlunos () {
    return (
        <div className='card'>
            <div className='card-header'>
                <div className='card-header-title has-background-grey-light'>
                 Alunos
                </div>
            </div>
            <div className='card-content'>
                <table className='table is-striped is-hoverable is-bordered is-fullwidth'>
                    <thead className='has-background-grey-lighter'>
                        <tr>
                        <th>Aluno</th>
                        <th>Matrícula</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>Gabriel Fiorelli</th>
                        <th>14101376</th>
                        </tr>
                        <tr>
                        <th>Rafael Oliveira</th>
                        <th>17102816</th>
                        </tr>
                        <tr>
                        <th>Matheus Pereira</th>
                        <th>13100767</th>
                        </tr>
                        <tr>
                        <th>Jonas Lai</th>
                        <th>17100911</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      )
}

export default BuscaAlunos
