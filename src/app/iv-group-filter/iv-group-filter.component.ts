import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from "@angular/core";
import * as $ from "jquery";
import { Observable, of, BehaviorSubject } from "rxjs";

enum FilterGroupRestriction {
  All = "all",
  Severity = "defectClass",
  BladSide = "bladeSide",
  AnnotationType = "defectType",
  WindPark = "site",
  TurbineType = "unitType",
  Turbine = "unit",
  BladeRadius = "bladeRadius",
  Country = "country"
}

@Component({
  selector: "iv-group-filter",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./iv-group-filter.component.html",
  styleUrls: ["./iv-group-filter.component.scss", "./filter.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IvGroupFilterComponent
  implements OnInit, AfterViewInit, OnDestroy {
  private ngSelectMutationObserver: MutationObserver;
  /**
   * originaL: stateService.ngSelectCriteriaList
   */
  ngSelectCriteriaList: any[] = [];
  $ngSelectFilterItems: Observable<any[]> = of([]);
  hasSelectedCriteriaEmptyBS: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  ngSelectFilterGroupRestriction: string = FilterGroupRestriction.All;
  // make enum available for template by making it a member of compo class
  filterGroupRestriction = FilterGroupRestriction;

  // For Class
  ngSelectOpened: boolean;

  public ngOnInit(): void {}

  public ngOnDestroy() {}

  public ngAfterViewInit(): void {
    const that = this;
    // CRITIC: make this lambda | () =>
    this.ngSelectMutationObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === "class") {
          const ngSelect = $(".iv2-filter-view ng-select");
          if (!that.ngSelectOpened && ngSelect.hasClass("ng-select-opened")) {
            that.ngSelectOpened = true;
          } else if (
            that.ngSelectOpened &&
            !ngSelect.hasClass("ng-select-opened")
          ) {
            that.ngSelectOpened = false;
          }
        }
      });
    });

    this.ngSelectMutationObserver.observe($("ng-select")[0], {
      attributes: true
    });
    // this.fitColumns();
  }

  /**
   *
   * @param scopedItem ScopedSelectFilterItem
   */
  groupItemByName(scopedItem: any) {
    return scopedItem.data.name;
  }

  focusAndOpenFilterNgSelect() {}

  getFlag(item) {
    // const iso2: string = item.uniqueName.name['iso2']
    // return `flag-icon flag-icon-${iso2.toLowerCase()}`;
    return "";
  }

  /**
   *
   * @param criterion ScopedSelectFilterItem
   */
  removeSearchCriterion(criterion: any) {
    // // HACK: Explicitly creating and assigning new array, instead of removing
    // // item from existing array, since ng-select not updating otherwise (2 way binding)
    // this.stateService.ngSelectCriteriaList = this.stateService.ngSelectCriteriaList.filter((value) => value !== criterion);
    // this.emitSelectedFilterItems(criterion, this.stateService.ngSelectCriteriaList);
  }
}
