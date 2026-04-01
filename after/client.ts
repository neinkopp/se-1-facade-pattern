import { SmartHomeFacade } from "./SmartHomeFacade";

function clientAfter() {
  const smartHome = new SmartHomeFacade();
  smartHome.watchMovie("Barbie");
}
