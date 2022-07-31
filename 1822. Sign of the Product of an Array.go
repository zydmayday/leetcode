func arraySign(nums []int) int {
    res := 1
    for _, x := range nums {
        if x == 0 {
            return 0
        } else if x <= 0 {
            res *= -1
        }
    }
    return res
}
