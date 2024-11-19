import { setTimeout } from "node:timers/promises";

export async function HugeComponent(): Promise<JSX.Element> {
  await setTimeout(4000);

  return <div className="text-center">I'm soooo biggggg</div>;
}
