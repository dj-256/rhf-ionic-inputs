import { IonPickerColumn } from "@ionic/react";
import type {
  IonPickerColumnCustomEvent,
  JSX,
  PickerColumnChangeEventDetail,
} from "@ionic/core/components";

type AdditionalProps = {
  onChange: (
    event: IonPickerColumnCustomEvent<PickerColumnChangeEventDetail>,
  ) => void;
};

export const RHFIonPickerColumn = ({
  onChange,
  ...rest
}: JSX.IonPickerColumn &
  Omit<JSX.IonPickerColumn, "onIonChange"> &
  AdditionalProps) => {
  return <IonPickerColumn {...rest} onIonChange={onChange} />;
};
