//
//  YYReactBrideM.m
//  StockDemo
//
//  Created by mac on 2020/1/17.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "YYReactBrideM.h"
#import "YYVideoRecordVC.h"
#import "YYRootNavVC.h"

@implementation YYReactBrideM

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(pushVideoRecord){
  dispatch_async(dispatch_get_main_queue(), ^{
    YYVideoRecordVC *vc = [[YYVideoRecordVC alloc] init];
    YYRootNavVC *nav = [[YYRootNavVC alloc] initWithRootViewController:vc];
    [[YYReactBrideM getRootVC] presentViewController:nav animated:YES completion:nil];
  });
}

+ (UIViewController *)getRootVC{
  return [UIApplication sharedApplication].keyWindow.rootViewController;
}
@end
