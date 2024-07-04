import { IonRange, type RangeChangeEventDetail } from "@ionic/react";
import type { IonRangeCustomEvent, JSX } from "@ionic/core/components";

type AdditionalProps = {
  onChange: (event: IonRangeCustomEvent<RangeChangeEventDetail>) => void;
  onBlur?: ((event: IonRangeCustomEvent<void>) => void) | undefined;
};
export const RHFIonRange = ({
  onChange,
  onBlur,
  ...rest
}: JSX.IonRange &
  Omit<JSX.IonRange, "onIonChange"> &
  Omit<JSX.IonRange, "onIonBlur"> &
  AdditionalProps) => {
  return <IonRange {...rest} onIonChange={onChange} onIonBlur={onBlur} />;
};
