# Syncroll

Use Syncroll to make html elements sticky.


## Quick start

###Demo
[HERE](https://yenereren.github.io/syncroll/demo/)


### Load
```html
<script src="syncroll.js"></script>
```

### Usage

```html
<div class="row" id="scrollableContainer">

            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div class="sycn-panel" id="scrollableArea">
                    <h1>left-panel</h1>
                </div>
            </div>

            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <div class="sycn-panel" id="aasd" style="margin-bottom:100px;">
                    <h1>MARGIN</h1>
                    <h1>MARGIN</h1>
                </div>
            </div>

            <div class="col-xs-push-3 col-lg-push-3 col-md-push-3 col-xs-9 col-sm-9 col-md-9 col-lg-9">

                <div class="sycn-panel" id="fixedArea">
                    <h1>right-panel</h1>
                    <h1>right-panel</h1>
                    <h1>right-panel</h1>
                    <h1>right-panel</h1>
                    <h1>right-panel</h1>
                    <h1>right-panel</h1>
                    <h1>right-panel</h1>
                    <h1>right-panel</h1>
                    <h1>right-panel</h1>
                    <h1>right-panel</h1>
                </div>
            </div>
        </div>
```

```js

    $(document).ready(function() {
        $('#scrollableArea').syncroll('#fixedArea');
    });
```


![Build Status](https://travis-ci.org/yenereren/syncroll.svg?branch=master)

### Test Runner
https://yenereren.github.io/syncroll/specs/test-runner.html


## License

The code and the documentation are released under the [GPL](LICENSE).


