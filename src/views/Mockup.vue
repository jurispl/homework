<template>
  <div class="container">

    <div class="stepper">
      <div class="stepper-header">

        <div class="step-header">
          <div class="step-content">
            <div class="step-icon">
              <div class="step-icon-state fulfilled">
                <div class="step-icon-label-text fulfilled">1</div>
              </div>
            </div>

            <div class="step-label">
              <div class="step-label-text">Personal info</div>
            </div>
          </div>
        </div>

        <div class="step-header">
          <div class="step-horizontal-line fulfilled"></div>

          <div class="step-content">
            <div class="step-icon">
              <div class="step-icon-state fulfilled">
                <div class="step-icon-label-text fulfilled">2</div>
              </div>
            </div>

            <div class="step-label">
              <div class="step-label-text">Member ship</div>
            </div>
          </div>
        </div>

        <div class="step-header">
          <div class="step-horizontal-line active"></div>

          <div class="step-content">
            <div class="step-icon">
              <div class="step-icon-state active">
                <div class="step-icon-label-text active">2</div>
              </div>
            </div>

            <div class="step-label">
              <div class="step-label-text">Member ship</div>
            </div>
          </div>
        </div>

        <div class="step-header">
          <div class="step-horizontal-line"></div>

          <div class="step-content">
            <div class="step-icon">
              <div class="step-icon-state">
                <div class="step-icon-label-text">3</div>
              </div>
            </div>

            <div class="step-label">
              <div class="step-label-text">Overview</div>
            </div>
          </div>
        </div>


      </div>
      <!-- :: end stepper-header -->

      <div class="stepper-content">
        <div class="stepper-content-top">
          <h2 class="stepper-title">Personal info</h2>

          <div class="form-field">
            <label for="First-name" class="form-label">First name</label>
            <input id="First-name" type="text" class="form-control">
          </div>

          <div class="form-field">
            <label for="Last-name" class="form-label">Last name</label>
            <input id="Last-name" type="text" class="form-control">
          </div>

          <div class="form-field">
            <label for="E-mail" class="form-label">E-mail</label>
            <input id="E-mail" type="text" class="form-control">
          </div>

          <div class="field-check">
            <input class="field-check-input" type="radio" name="membership" id="Membership-regular" checked>
            <label class="field-check-label" for="Membership-regular">
              Regular
            </label>
          </div>
          <div class="field-check">
            <input class="field-check-input" type="radio" name="membership" id="Membership-premium">
            <label class="field-check-label" for="Membership-premium">
              Premium
            </label>
          </div>

          <div class="description">
            <strong>Regular</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>

          <div>
            <ul class="list-group">
              <li class="list-group-item">
                <div class="item-label">First name:</div>
                John
              </li>
              <li class="list-group-item">
                <div class="item-label">Last name:</div>
                Smith
              </li>
              <li class="list-group-item">
                <div class="item-label">E-mail:</div>
                john.smith@email.com
              </li>
              <li class="list-group-item">
                <div class="item-label">Membership:</div>
                Regular
              </li>
              <li class="list-group-item">
                <div class="item-label">Home Phone:</div>
                99568453
              </li>

            </ul>
          </div>

          <div class="button-group">
            <button type="submit" class="btn link">Edit</button>
          </div>

          <div class="form-field">
            <label for="Phone-work" class="form-label">Phone</label>
            <div class="form-field-group">
              <button disabled type="button" class="btn btn-outline dropdown-toggle _show">Work</button>
              <ul class="dropdown-menu _show">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
              <input id="Phone-work" type="text" class="form-control">
            </div>
          </div>

          <div class="button-group">
            <button type="submit" class="btn link">+ Add phone</button>
          </div>

        </div>

        <div class="stepper-content-footer">
          <div class="to-column">
            <button type="button" class="btn outline s-lg">Submit</button>
            <button type="button" class="btn primary s-lg">Submit</button>
          </div>
        </div>

      </div>

      <!-- :: end stepper-content -->
    </div>

    <!-- :: end stepper -->
  </div>
</template>

<script>
export default {
  name: "Mockup"
}
</script>

<style scoped>

</style>
