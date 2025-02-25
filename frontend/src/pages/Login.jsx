const Login = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <form className="mt-4">
          <input type="email" placeholder="Email" className="block w-full p-2 border mb-2"/>
          <input type="password" placeholder="Password" className="block w-full p-2 border mb-2"/>
          <button className="bg-blue-600 text-white p-2 rounded w-full">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  