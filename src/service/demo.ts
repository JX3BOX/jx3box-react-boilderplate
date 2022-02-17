import { $cms } from "@jx3box/jx3box-common/js/request";

export const getBox = () => $cms().get("/api/cms/config/menu/box");
