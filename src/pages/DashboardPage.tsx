import Button from "../components/ui/Button";

const DashboardPage = () => {
  return (
    <div className="flex justify-between">
      <h1>DashboardPage</h1>
      <Button variant="primary">
        +<p>New</p>
      </Button>
    </div>
  );
};

export default DashboardPage;
