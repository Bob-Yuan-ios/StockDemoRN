//
//  YYVideoRecordVC.m
//  StockDemo
//
//  Created by mac on 2020/1/17.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "YYVideoRecordVC.h"

@interface YYVideoRecordVC ()
<
UITableViewDelegate,
UITableViewDataSource
>

@property (nonatomic, strong) NSArray *dataArr;

@property (nonatomic, strong) UITableView *tableV;

@end

@implementation YYVideoRecordVC

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  self.view.backgroundColor = [UIColor redColor];
  self.title = @"原生页面";
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

#pragma mark --
#pragma mark tableView delegate method
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
  return _dataArr.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
  UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"cell"];
  if (!cell) {
    cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"cell"];
  }
  return cell;
}
@end
