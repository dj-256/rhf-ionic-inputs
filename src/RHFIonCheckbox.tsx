import { type CheckboxChangeEventDetail, IonCheckbox } from "@ionic/react";
import type { IonCheckboxCustomEvent, JSX } from "@ionic/core/components";

type AdditionalProps = {
  onChange: (
    event: IonCheckboxCustomEvent<CheckboxChangeEventDetail<any>>,
  ) => void;
  onBlur?: ((event: IonCheckboxCustomEvent<void>) => void) | undefined;
};
export const RHFIonCheckbox = ({
  onChange,
  onBlur,
  ...rest
}: JSX.IonCheckbox &
  Omit<JSX.IonCheckbox, "onIonChange"> &
  Omit<JSX.IonCheckbox, "onIonBlur"> &
  AdditionalProps) => {
  return <IonCheckbox {...rest} onIonChange={onChange} onIonBlur={onBlur} />;
};
