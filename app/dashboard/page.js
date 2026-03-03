export default function Dashboard(){
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User DataTable</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Admin</td>
            <td className="border px-4 py-2">admin@test.com</td>
            <td className="border px-4 py-2">admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}