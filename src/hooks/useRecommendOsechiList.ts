import { useMemo } from 'react';
import { osechiStore } from '@src/store/osechiStore';
import { Osechi } from '@src/types';

export const useRecommendOsechiList = (category: 'ja' | 'we' | 'ch') => {
  return useMemo(() => {
    const osechiList: Osechi[] = [];
    switch (category) {
      case 'ja': {
        osechiList.push(osechiStore.findByCode('1_takasago'));
        osechiList.push(osechiStore.findByCode('1_kohaku'));
        osechiList.push(osechiStore.findByCode('2_kacyo_F-020'));
        break;
      }
      case 'we': {
        osechiList.push(osechiStore.findByCode('1_takasagodd'));
        osechiList.push(osechiStore.findByCode('1_deandeluca'));
        osechiList.push(osechiStore.findByCode('2_bistrot-gagnant_2018_2dan'));
        break;
      }
      case 'ch': {
        osechiList.push(osechiStore.findByCode('1_takasagocn'));
        osechiList.push(osechiStore.findByCode('2_kiyouken_g201925000'));
        osechiList.push(osechiStore.findByCode('2_saiko-ro_osechi1'));
      }
    }
    return osechiList;
  }, [category]);
};
