import { IonTextarea, type TextareaChangeEventDetail } from "@ionic/react";
import type { IonTextareaCustomEvent, JSX } from "@ionic/core/components";

type AdditionalProps = {
  onChange: (event: IonTextareaCustomEvent<TextareaChangeEventDetail>) => void;
  onBlur?: ((event: IonTextareaCustomEvent<FocusEvent>) => void) | undefined;
};
export const RHFIonTextarea = ({
  onChange,
  onBlur,
  ...rest
}: JSX.IonTextarea &
  Omit<JSX.IonTextarea, "onIonChange"> &
  Omit<JSX.IonTextarea, "onIonBlur"> &
  AdditionalProps) => {
  return <IonTextarea {...rest} onIonChange={onChange} onIonBlur={onBlur} />;
};
