import { type DatetimeChangeEventDetail, IonDatetime } from "@ionic/react";
import type { IonDatetimeCustomEvent, JSX } from "@ionic/core/components";

type AdditionalProps = {
  onChange: (event: IonDatetimeCustomEvent<DatetimeChangeEventDetail>) => void;
  onBlur?: ((event: IonDatetimeCustomEvent<void>) => void) | undefined;
};
export const RHFIonDatetime = ({
  onChange,
  onBlur,
  onIonCancel,
  onIonChange,
  onIonBlur,
  ...rest
}: JSX.IonDatetime &
  Omit<JSX.IonDatetime, "onIonChange"> &
  Omit<JSX.IonDatetime, "onIonBlur"> &
  AdditionalProps) => {
  return <IonDatetime {...rest} onIonChange={onChange} onIonBlur={onBlur} />;
};
