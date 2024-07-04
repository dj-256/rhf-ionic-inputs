import { IonSearchbar, type SearchbarChangeEventDetail } from "@ionic/react";
import type { IonSearchbarCustomEvent, JSX } from "@ionic/core/components";

type AdditionalProps = {
  onChange: (
    event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>,
  ) => void;
  onBlur?: ((event: IonSearchbarCustomEvent<void>) => void) | undefined;
};

export const RHFIonSearchbar = ({
  onChange,
  onBlur,
  ...rest
}: JSX.IonSearchbar &
  Omit<JSX.IonSearchbar, "onIonChange"> &
  Omit<JSX.IonSearchbar, "onIonBlur"> &
  AdditionalProps) => {
  return <IonSearchbar {...rest} onIonChange={onChange} onIonBlur={onBlur} />;
};
