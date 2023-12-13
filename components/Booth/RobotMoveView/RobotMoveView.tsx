import StatsCard from "@/components/StatCard/StatCard";
import { GiMove } from "react-icons/gi";

export default function RobotMoveView({ title, selected = false }: { title: string, selected?: boolean }) {
  return <StatsCard title={title} stat="0" icon={<GiMove />} selected={selected} />;
}
