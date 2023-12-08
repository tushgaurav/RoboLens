import StatsCard from "@/components/StatCard/StatCard";
import { GiMove } from "react-icons/gi";

export default function RobotMoveView({ title }: { title: string }) {
  return <StatsCard title={title} stat="0" icon={<GiMove />} />;
}
