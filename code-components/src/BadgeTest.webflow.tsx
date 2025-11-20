import { Badge } from "./BadgeTest";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(Badge, {
  name: "BadgeTest",
  group: "Test",
  props: {
    text: props.Text({
      name: "Text",
      defaultValue: "Hello in my World Poland",
    }),
    variant: props.Variant({
      name: "Variant",
      options: ["Light", "Dark"],
      defaultValue: "Light",
    }),
  },
});
