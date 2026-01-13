import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="min-h-screen w-screen bg-slate-500 p-6 justify-center relative flex">
      <div className="w-[500px] space-y-4">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-2 top-5 text-slate-100"
        >
          <ChevronLeftIcon />
        </button>

        <Title>Detalhes da Tarefa</Title>

        <div className="bg-slate-200 p-4 rounded-md my-4">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
