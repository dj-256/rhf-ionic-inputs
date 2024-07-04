import { type InputChangeEventDetail, IonInput } from "@ionic/react";
import type { IonInputCustomEvent, JSX } from "@ionic/core/components";

type AdditionalProps = {
  onChange: (event: IonInputCustomEvent<InputChangeEventDetail>) => void;
  onBlur?: ((event: IonInputCustomEvent<FocusEvent>) => void) | undefined;
};
export const RHFIonInput = ({
  onChange,
  onBlur,
  ...rest
}: JSX.IonInput &
  Omit<JSX.IonInput, "onIonChange"> &
  Omit<JSX.IonInput, "onIonBlur"> &
  AdditionalProps) => {
  return <IonInput {...rest} onIonChange={onChange} onIonBlur={onBlur} />;
};
