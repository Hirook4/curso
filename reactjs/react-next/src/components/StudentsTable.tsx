import { Student } from "@/types/Student";

type Props = {
    students: Student[];
}

export const StudentTable = ({ students }: Props) => {
    return (
        <div>
            <h1>Exercicio Tabela</h1>
            <table className="w-max border-gray-600 rounded-md overflow-hidden">
                <thead>
                    <tr className="text-left border-b border-gray-700 bg-gray-800">
                        <th className="p-3">Name</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Nota 1</th>
                        <th className="p-3">Nota 2</th>
                        <th className="p-3">Média Final</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map em students para exibir a lista */}
                    {students.map(item => (
                        <tr key={item.id} className="text-gray-800 bg-gray-400 border-b border-gray-600">
                            <td className="p-3 flex items-center">
                                <img src={item.avatar} alt={item.nome} className="w-10 h-10 rounded-full mr-3" />
                                <div>
                                    <div className="font-bold">{item.nome}</div>
                                    <div>{item.email}</div>
                                </div>
                            </td>
                            <td className="p-3">
                                {item.ativo && <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">Ativo</div>}
                                {!item.ativo && <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">Inativo</div>}
                            </td>
                            <td className="p-3">{item.nota1.toFixed(1)}</td>
                            <td className="p-3">{item.nota2.toFixed(1)}</td>
                            <td className="p-3 font-bold">{item.ativo ? ((item.nota1 + item.nota2) / 2).toFixed(1) : '--'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}