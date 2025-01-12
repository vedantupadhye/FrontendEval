import Tabs from "./Components/Tabs"

function App() {

  const tabsData = [
    {
      label: "Profile",
      content: <div>Profile Info Content</div>,
    },
    {
      label: "Dashboard",
      content: <div>Dashboard Content</div>,
    },
    {
      label: "Settings",
      content: <div>Settings Content</div>,
    },
    {
      label: "Invoice",
      content: <div>Invoice Content</div>,
    },
  ];

  return (
    <>
      <h1 className="text-red-500">hey</h1>
      <Tabs tabsData={tabsData}/>
    </>
  )
}

export default App
