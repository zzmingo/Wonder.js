import { IO } from "wonder-fantasy-land/dist/es2015/types/IO";

export var getIsTest = (InitConfigDataFromSystem: any) => {
    return InitConfigDataFromSystem.isTest;
}

export var setIsTest = (isTest: boolean, InitConfigDataFromSystem: any) => {
    return IO.of(() => {
        InitConfigDataFromSystem.isTest = isTest;
    });
}
