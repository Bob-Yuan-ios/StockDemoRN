//
//  YYRootNavVC.m
//  StockDemo
//
//  Created by mac on 2020/1/17.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "YYRootNavVC.h"

@interface YYRootNavVC ()<UIGestureRecognizerDelegate>

@end

@implementation YYRootNavVC

- (id)initWithRootViewController:(UIViewController *)rootViewController{
    if (self = [super initWithRootViewController:rootViewController]) {
        self.modalPresentationStyle = UIModalPresentationFullScreen;
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  
  self.interactivePopGestureRecognizer.delegate = self;
  self.view.backgroundColor = [UIColor whiteColor];
  if (@available(iOS 13.0, *)) {
      self.overrideUserInterfaceStyle = UIUserInterfaceStyleLight;
  } else {
      // Fallback on earlier versions
  }
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
