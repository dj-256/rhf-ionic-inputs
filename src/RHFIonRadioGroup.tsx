import { IonRadioGroup, type RadioGroupChangeEventDetail } from "@ionic/react";
import type { IonRadioGroupCustomEvent, JSX } from "@ionic/core/components";

type AdditionalProps = {
  onChange: (
    event: IonRadioGroupCustomEvent<RadioGroupChangeEventDetail<any>>,
  ) => void;
};

export const RHFIonRadioGroup = ({
  onChange,
  ...rest
}: JSX.IonRadioGroup &
  Omit<JSX.IonRadioGroup, "onIonChange"> &
  AdditionalProps) => {
  return <IonRadioGroup {...rest} onIonChange={onChange} />;
};
